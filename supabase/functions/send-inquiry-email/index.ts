import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  // Read the database row that was just inserted
  const { record } = await req.json()

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Napier Labs Portal <onboarding@resend.dev>', // You can change this to vault@napierlabs.dev after verifying your domain in Resend
      to: 'hello@napierlabs.dev',
      subject: `🚨 New Build Inquiry from ${record.name}`,
      html: `
        <h3>New Project Inquiry</h3>
        <p><strong>Name:</strong> ${record.name}</p>
        <p><strong>Email:</strong> ${record.email}</p>
        <p><strong>Company:</strong> ${record.company || 'N/A'}</p>
        <p><strong>Inquiry Type:</strong> ${record.inquiry_type || 'N/A'}</p>
        <p><strong>Timeline:</strong> ${record.timeline || 'N/A'}</p>
        <p><strong>Budget Range:</strong> ${record.budget_range || 'N/A'}</p>
        <p><strong>Project Details:</strong> ${record.project_details || 'N/A'}</p>
      `,
    }),
  })

  const data = await res.json()
  return new Response(JSON.stringify(data), { 
    headers: { 'Content-Type': 'application/json' },
    status: res.status 
  })
})
