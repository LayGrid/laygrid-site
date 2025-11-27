import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const { firstName, lastName, company, email, message } = body;

    if (!firstName || !lastName || !company || !email || !message) {

      return NextResponse.json(

        { error: "Missing fields" },

        { status: 400 }

      );

    }

    // Transporter muss mit deinen echten SMTP-Daten gefuellt werden

    const transporter = nodemailer.createTransport({

      host: process.env.SMTP_HOST,

      port: Number(process.env.SMTP_PORT ?? 587),

      secure: false,

      auth: {

        user: process.env.SMTP_USER,

        pass: process.env.SMTP_PASS,

      },

    });

    await transporter.sendMail({

      from: '"LayGrid Website" <no-reply@laygrid.ch>',

      to: "laygrid@outlook.com",

      subject: "Neue Anfrage ueber das Kontaktformular",

      text: `

Name: ${firstName} ${lastName}

Firma: ${company}

E-Mail: ${email}

Nachricht:

${message}

      `.trim(),

    });

    return NextResponse.json({ ok: true });

  } catch (e) {

    console.error(e);

    return NextResponse.json(

      { error: "Server error" },

      { status: 500 }

    );

  }

}
 