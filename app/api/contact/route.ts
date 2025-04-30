import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "infoinfo@mkoia.ge",
                pass:
                    "rylgwnxgnbdhdnoq"
                // process.env.EMAIL_PASS
            }
        });

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
            attachments: [
                {
                    filename: 'logo.jpg',
                    path: './public/logo.jpg',
                    cid: 'logo'
                }
            ]
        };

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
            attachments: [
                {
                    filename: 'logo.jpg',
                    path: './public/logo.jpg',
                    cid: 'logo'
                }
            ]
        };

        await transporter.sendMail(mailForUser);
        await transporter.sendMail(mailForMe);

        return Response.json({
            message: 'Email sent successfully'
        });

    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Error sending email' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
