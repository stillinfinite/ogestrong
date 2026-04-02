export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  try {
    const response = await fetch(
      `https://emailoctopus.com/api/1.6/lists/${process.env.EO_LIST_ID}/contacts`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          api_key: process.env.EO_API_KEY,
          email_address: email,
          status: 'SUBSCRIBED',
        }),
      }
    );

    if (!response.ok) {
      const data = await response.json();
      if (data.error && data.error.code === 'MEMBER_EXISTS_WITH_EMAIL_ADDRESS') {
        return res.status(200).json({ success: true });
      }
      return res.status(response.status).json({ error: data.error?.message || 'Subscription failed' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: 'Something went wrong' });
  }
}
