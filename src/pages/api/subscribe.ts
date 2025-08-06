import type { NextApiRequest, NextApiResponse } from 'next';

const GROUP_ID = '158654295611279263'; // 🔁 Replace with your actual group ID

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    console.warn('❌ Invalid method:', req.method);
    return res.status(405).end();
  }

  const { email } = req.body;
  console.log('📥 Incoming email:', email);

  if (!email || typeof email !== 'string') {
    console.warn('❌ Invalid email received:', email);
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  const apiKey = process.env.MAILERLITE_API_KEY;
  if (!apiKey) {
    console.error('❌ MAILERLITE_API_KEY is missing from environment variables.');
    return res.status(500).json({ error: 'Server misconfigured.' });
  }

  try {
    const response = await fetch(`https://api.mailerlite.com/api/v2/groups/${GROUP_ID}/subscribers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-MailerLite-ApiKey': apiKey,
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('❌ MailerLite API error:', data);
      return res.status(response.status).json({ error: data });
    }

    console.log('✅ Email successfully subscribed:', email);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('❌ Unexpected error:', err);
    return res.status(500).json({ error: 'Unexpected server error.' });
  }
}
