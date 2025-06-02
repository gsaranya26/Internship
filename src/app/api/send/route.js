export async function POST(req) {
  const body = await req.json();
  const { email, subject, message } = body;

  // Optional: validate inputs
  if (!email || !subject || !message) {
    return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
  }

  // Here you can use any email service like Nodemailer, SendGrid, Resend, etc.
  // For now, just log the message
  console.log("Email received:", { email, subject, message });

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
