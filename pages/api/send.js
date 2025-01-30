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
const emailHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; }
        .container { max-width: 600px; margin: auto; padding: 20px; background: #f9f9f9; }
        h1 { color: #f76c6c; text-align: center; }
        p { text-align: center; color: #333; }
        .cta-button { display: block; width: 180px; margin: auto; padding: 12px; background: #f76c6c; color: #fff; text-align: center; text-decoration: none; font-weight: bold; border-radius: 5px; }
        .footer { text-align: center; font-size: 12px; color: #666; padding: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Thank You for Your Submission!</h1>
        <p>Dear ${fullName},</p>
        <p>We have received your details. Here’s a summary:</p>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Website:</strong> <a href="${websiteLink}">${websiteLink}</a></p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <a href="https://glassfrogtech.co.uk" class="cta-button">Read More</a>
        <div class="footer">
          <p>Glassfrog Technologies Private Limited</p>
        </div>
      </div>
    </body>
    </html>
  `;
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
       html: emailHTML,
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
