export const runtime = 'edge';

export default async function handler(req) {
  if (req.method === 'POST') {
    const { name, message, email, phoneNumber } = await req.json();

    // Validate required fields
    if (!name || !message || !email || !phoneNumber) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: name, message, email, or phoneNumber." }),
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
          subject: 'New Contact Form Submission for Glassfrog',
          content: [
            {
              type: 'text/plain',
              value: `
                New form submission:
                Name: ${name} 
                Message: ${message}
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
          subject: 'Contact Form Submission Confirmation',
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
