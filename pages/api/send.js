import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fullName, websiteLink, email, phoneNumber } = req.body;

    // Validate required fields
    if (!fullName || !websiteLink || !email || !phoneNumber) {
      return res
        .status(400)
        .json({ error: "Missing required fields: fullName, websiteLink, email, or phoneNumber." });
    }

    // Create a transporter using your email service
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    // Email to Admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: process.env.RECEIVER_EMAIL, // Admin email address
      subject: 'New Form Submission for Glassfrog', // Email subject
      text: `
        New form submission:
        Name: ${fullName} 
        Website Link: ${websiteLink}
        Email: ${email}
        Phone Number: ${phoneNumber}
      `,
    };

    // Email to User
    const userMailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: email, // User's email address
      subject: 'Form Submission Confirmation', // Email subject
      text: `
        Dear ${fullName},

        Thank you for submitting your details. Here's a summary of your submission:
        Name: ${fullName}
        Website Link: ${websiteLink}
        Email: ${email}
        Phone Number: ${phoneNumber}

        Regards,
        Glassfrog Technologies Private Limited
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
