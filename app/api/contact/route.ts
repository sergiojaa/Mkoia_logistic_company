import { readFileSync } from 'fs';
import nodemailer from 'nodemailer';
import { join } from 'path';
import dotenv from 'dotenv';

// Load environment variables from .env.local (only needed if you haven't configured it already)
dotenv.config();

export async function POST(req: Request) {
    try {
        // Ensure that environment variables are available
        console.log('EMAIL_USER:', process.env.EMAIL_USER);
        console.log('EMAIL_PASS:', process.env.EMAIL_PASS);

        // Check if environment variables are undefined
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            throw new Error('Missing email credentials in environment variables');
        }

        const body = await req.json();

        // Create the transporter using the environment variables
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Prepare logo attachment
        const logoImage = {
            filename: 'logo.jpg',
            content: readFileSync(join(process.cwd(), 'public', 'logo.jpg')),
            cid: 'logo', // This is referenced in the HTML to embed the image
            contentType: 'image/jpeg',
        };

        // Prepare the mail to be sent to the company
        const mailForMe = {
            from: `${body.name} <${body.email}>`,
            to: "infoinfo@mkoia.ge",
            subject: `მესიჯი ${body.name} ${body.lastName} -სგან`,
            html: `
            <div style="font-family: Arial, sans-serif; padding: 20px;">
                <img src="cid:logo" alt="Logo" style="width: 150px; margin-bottom: 20px;">
                <h2>ახალი შეტყობინება</h2>
                <p><strong>სახელი:</strong> ${body.name} ${body.lastName}</p>
                <p><strong>ელ.ფოსტა:</strong> ${body.email}</p>
                <p><strong>ტელეფონი:</strong> ${body.phone}</p>
                <p><strong>შეტყობინება:</strong></p>
                <p>${body.message}</p>
            </div>
            `,
            attachments: [logoImage],
        };

        // Prepare the mail to be sent to the user as confirmation
        const mailForUser = {
            from: "infoinfo@mkoia.ge",
            to: `${body.email}`,
            subject: `Thank you for your Interest, ${body.name} ${body.lastName}`,
            html: `
            <div style="font-family: Arial, sans-serif; padding: 20px;">
                <img src="cid:logo" alt="Logo" style="width: 150px; margin-bottom: 20px;">
                <h2>Thanks for contacting us!</h2>
                <p>Hello ${body.name},</p>
                <p>Thank you for contacting us! We will definitely get back to you as soon as possible.</p>
                <p>LLC Mkoia</p>
            </div>
            `,
            attachments: [logoImage],
        };

        // Send the email to the user and the company
        await transporter.sendMail(mailForUser);
        await transporter.sendMail(mailForMe);

        // Return success response
        return Response.json({
            message: 'Email sent successfully',
        });

    } catch (error: any) {
        console.error('Detailed error sending email:', error); // Log the full error for debugging
        return new Response(JSON.stringify({ error: error.message || 'Unknown error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
