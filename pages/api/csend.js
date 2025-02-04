// Remove the edge runtime directive since we need Node.js features
// export const runtime = 'edge';

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, message, email, phoneNumber } = req.body;

    // Validate required fields
    if (!name || !message || !email || !phoneNumber) {
      return res.status(400).json({ 
        error: "Missing required fields: name, message, email, or phoneNumber." 
      });
    }

    // Create a transporter using your email service
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to Admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: 'New Contact Form Submission for Glassfrog',
      text: `
        New form submission:
        Name: ${name} 
        Message: ${message}
        Email: ${email}
        Phone Number: ${phoneNumber}
      `,
    };

    // Email to User
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Contact Form Submission Confirmation',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; }
            .container { max-width: 600px; margin: auto; padding: 20px; background: #f9f9f9; }
            h1 { color: #f76c6c; text-align: center; }
            p { text-align: center; color: #333; }
            .footer { text-align: center; font-size: 12px; color: #666; padding: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Thank You for Contacting Us!</h1>
            <p>Dear ${name},</p>
            <p>We have received your message. Here's a summary of your submission:</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Message:</strong> ${message}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phoneNumber}</p>
            <p>We will get back to you as soon as possible.</p>
            <div class="footer">
              <p>Glassfrog Technologies Private Limited</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    try {
      // Send email to Admin
      await transporter.sendMail(adminMailOptions);

      // Send email to User
      await transporter.sendMail(userMailOptions);

      res.status(200).json({ message: 'Confirmation emails sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send confirmation emails' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
