import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  console.log("--- 1. INCOMING TRANSMISSION DETECTED ---");

  try {
    // Check if we are receiving the data
    const { name, email, message } = await request.json();
    console.log("2. Data received from form:", { name, email });

    // Check if the .env file is actually loading
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log("❌ 3. CRITICAL ERROR: .env variables are missing or undefined!");
      return NextResponse.json({ message: "Missing Environment Variables" }, { status: 500 });
    }

    console.log("3. Environment variables found. Creating transporter...");
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Transmission from ${name}`,
      text: `Message from ${email}:\n\n${message}`,
    };

    console.log("4. Attempting to send email via Google servers...");
    await transporter.sendMail(mailOptions);
    
    console.log("5. ✅ SUCCESS: Email Sent!");
    return NextResponse.json({ message: "Success" }, { status: 200 });

  } catch (error) {
    console.error("❌ ERROR CAUGHT:", error.message);
    return NextResponse.json({ message: "Failed" }, { status: 500 });
  }
}