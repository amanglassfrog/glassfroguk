export const runtime = 'edge';

export default async function handler(req) {
  if (req.method === 'POST') {
    const { fullName, websiteLink, email, phoneNumber } = await req.json();

    // Validate required fields
    if (!fullName || !websiteLink || !email || !phoneNumber) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: fullName, websiteLink, email, or phoneNumber." }),
        { status: 400 }
      );
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
        <p>We have received your details. Here's a summary:</p>
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

    try {
      // Send email to Admin using Cloudflare Workers
      const adminEmailResponse = await fetch('https://api.mailchannels.net/tx/v1/send', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [{ email: process.env.RECEIVER_EMAIL }],
            },
          ],
          from: {
            email: process.env.SENDER_EMAIL,
            name: 'Glassfrog Technologies',
          },
          subject: 'New Form Submission for Glassfrog',
          content: [
            {
              type: 'text/plain',
              value: `
                New form submission:
                Name: ${fullName} 
                Website Link: ${websiteLink}
                Email: ${email}
                Phone Number: ${phoneNumber}
              `,
            },
          ],
        }),
      });

      // Send email to User using Cloudflare Workers
      const userEmailResponse = await fetch('https://api.mailchannels.net/tx/v1/send', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [{ email: email }],
            },
          ],
          from: {
            email: process.env.SENDER_EMAIL,
            name: 'Glassfrog Technologies',
          },
          subject: 'Form Submission Confirmation',
          content: [
            {
              type: 'text/html',
              value: emailHTML,
            },
          ],
        }),
      });

      if (!adminEmailResponse.ok || !userEmailResponse.ok) {
        throw new Error('Failed to send one or more emails');
      }

      return new Response(
        JSON.stringify({ message: 'Confirmation emails sent successfully' }),
        { status: 200 }
      );
    } catch (error) {
      console.error('Error sending email:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to send confirmation emails' }),
        { status: 500 }
      );
    }
  }

  return new Response(
    JSON.stringify({ message: 'Method Not Allowed' }),
    { status: 405 }
  );
}
