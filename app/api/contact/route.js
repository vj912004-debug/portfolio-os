import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Initialize the transporter with Vercel Environment Variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify connection configuration
    await transporter.verify();

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: 'VJ912004@gmail.com', // Your receiving email
      replyTo: email, // So you can reply directly to the sender
      subject: `PORTFOLIO_OS: New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: monospace; background: #03050a; color: #fff; padding: 20px; border: 1px solid #00f2ff;">
          <h2 style="color: #00f2ff; border-bottom: 1px solid #00f2ff; padding-bottom: 10px;">INCOMING_TRANSMISSION</h2>
          <p><strong>SENDER:</strong> ${name}</p>
          <p><strong>REPLY_TO:</strong> ${email}</p>
          <div style="margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.05);">
            ${message}
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("TRANSMISSION_FAILURE:", error.message);
    return NextResponse.json(
      { success: false, error: error.message }, 
      { status: 500 }
    );
  }
}