export async function onRequestPost(context) {
  try {
    const formData = await context.request.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone") || "Not provided";
    const bondType = formData.get("bond-type") || "Not specified";
    const message = formData.get("message");

    // PLACEHOLDER: Domain verification with Resend pending review.
    // RESEND_API_KEY must be set in Cloudflare Pages env variables before this works.
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${context.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "InspireSurety Contact Form <contact@inspiresurety.com>",
        to: ["swright@inspiresurety.com"],
        reply_to: email,
        subject: `New Contact Form Submission from ${name}`,
        text: `
New Contact Form Submission — InspireSurety

Name: ${name}
Email: ${email}
Phone: ${phone}
Bond Interest: ${bondType}

Message:
${message}
        `.trim(),
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      return new Response(JSON.stringify({ success: false, error: errorText }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return Response.redirect(new URL("/contact/", context.request.url), 303);

  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}