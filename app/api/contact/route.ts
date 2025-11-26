import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_TO!,
      subject: `Portfolio | ${subject}`,
      html: `
  <div style="font-family: Arial, sans-serif; background-color: #0d0d0d; padding: 24px;">
    <table width="100%" cellpadding="0" cellspacing="0"
      style="max-width: 580px; margin: auto; background: #111; border-radius: 10px; overflow: hidden;">

      <tr>
        <td style="padding: 32px 24px; text-align: center; background: #0f0f0f; border-bottom: 1px solid #1f1f1f;">
          <img src="https://lucassantos-portfolio.vercel.app/logo.png"
               alt="Logo"
               width="70"
               style="display: block; margin: auto; opacity: 0.9;" />
        </td>
      </tr>

      <tr>
        <td style="padding: 24px; color: #fff; text-align: center;">
          <h2 style="margin: 0; font-size: 20px; font-weight: 600; color: #fff;">
            Novo contato pelo Portfólio
          </h2>
        </td>
      </tr>

      <tr>
        <td style="padding: 24px 30px; color: #e5e5e5; font-size: 15px; line-height: 1.6;">

          <p style="margin: 0 0 12px 0;">
            <strong style="color: #fff;">Nome:</strong> ${name}
          </p>

          <p style="margin: 0 0 12px 0;">
            <strong style="color: #fff;">Email:</strong> ${email}
          </p>

          <p style="margin: 0 0 12px 0;">
            <strong style="color: #fff;">Assunto:</strong> ${subject}
          </p>

          <p style="margin: 0 0 6px 0;">
            <strong style="color: #fff;">Mensagem:</strong>
          </p>

          <div style="background: #1a1a1a; padding: 16px; border-radius: 8px; color: #d1d1d1;">
            ${message}
          </div>

        </td>
      </tr>

      <tr>
        <td style="padding: 16px; font-size: 12px; text-align: center; color: #777; background: #0f0f0f;">
          Este e-mail foi enviado automaticamente através do formulário do portfólio.
        </td>
      </tr>

    </table>
  </div>
`,
    });

    return NextResponse.json({ message: "Email enviado com sucesso!" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Ocorreu um erro ao enviar o email" },
      { status: 500 },
    );
  }
}
