import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { messages } = req.body;

  try {
    const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages,
        temperature: 0.7,
      }),
    });

    const data = await openaiRes.json();
    const reply = data.choices?.[0]?.message?.content || 'Sorry, I had trouble responding.';

    res.status(200).json({ reply });
  } catch (err) {
    console.error('Chatbot error:', err);
    res.status(500).json({ reply: 'Something went wrong. Please try again.' });
  }
}
