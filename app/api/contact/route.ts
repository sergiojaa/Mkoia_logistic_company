import nodemailer from 'nodemailer'
export async function POST(req: Request, res: Response) {
    try {
        const body = await req.json()
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "kaliashvilisergi@gmail.com",
                pass: "fwtezrchbuvmcbxv"
            }
        });

        const mailForMe = {
            from: `${body.name}<${body.email}>`,
            to: "infoinfo@mkoia.ge",
            subjects: `მესიჯი ${body.name} ${body.lastName} -სგან`,
            text: `დაინტერესებული პირი: ${body.name} ${body.lastName}\n
                   ელ.ფოსტა: ${body.email}\n
                   ტელეფონი: ${body.phone}\n
                   შეტყობინება: ${body.message}`  // ტექსტი, რომელიც შედგება ყველა გადასაცემი მონაცემისგან

        }
        await transporter.sendMail(mailForMe)
        return Response.json({
            message: 'email send successfully'
        })
    } catch (error) {
        return Response.json({
            error: 'error sending memail'
        })
    }

}