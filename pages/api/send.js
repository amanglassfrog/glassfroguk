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

    try {
      // Send email using Digital Ocean API
      const emailResponse = await fetch('https://sea-turtle-app-sm5l4.ondigitalocean.app/api/sendMail/glassfrog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: fullName,
          email: email,
          phone: phoneNumber,
          message: `Website Link: ${websiteLink}\n\nThis is a submission from the website form.`,
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
