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

    try {
      // Send email using Digital Ocean API
      const emailResponse = await fetch('https://sea-turtle-app-sm5l4.ondigitalocean.app/api/sendMail/glassfrog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone: phoneNumber,
          message,
        }),
      });

      if (!emailResponse.ok) {
        throw new Error('Failed to send email');
      }

      return new Response(
        JSON.stringify({ message: 'Confirmation email sent successfully' }),
        { status: 200 }
      );
    } catch (error) {
      console.error('Error sending email:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to send confirmation email' }),
        { status: 500 }
      );
    }
  }

  return new Response(
    JSON.stringify({ message: 'Method Not Allowed' }),
    { status: 405 }
  );
}
