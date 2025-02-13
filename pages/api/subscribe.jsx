const axios = require('axios');

export default async function handler(req, res) {
  console.log('🔍 Checking environment variables on Vercel');
  console.log('MAILCHIMP_API_KEY:', process.env.MAILCHIMP_API_KEY ? 'Loaded' : 'Missing');
  console.log('MAILCHIMP_LIST_ID:', process.env.MAILCHIMP_LIST_ID ? 'Loaded' : 'Missing');
  console.log('MAILCHIMP_SERVER_PREFIX:', process.env.MAILCHIMP_SERVER_PREFIX ? 'Loaded' : 'Missing');

  if (!process.env.MAILCHIMP_API_KEY || !process.env.MAILCHIMP_LIST_ID || !process.env.MAILCHIMP_SERVER_PREFIX) {
    return res.status(500).json({ message: '🚨 Mailchimp API credentials are missing on Vercel.' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { email } = req.body;
    console.log(`📨 Subscribing email: ${email}`);

    const url = `https://${process.env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members/`;
    console.log('📡 Mailchimp API URL:', url);

    const data = {
      email_address: email,
      status: 'subscribed',
      tags: ['theekspertswebsite'],
    };

    const response = await axios.post(url, data, {
      auth: {
        username: 'anystring',
        password: process.env.MAILCHIMP_API_KEY,
      },
      headers: { 'Content-Type': 'application/json' },
    });

    console.log('✅ Mailchimp response:', response.data);
    res.status(200).json({ message: 'Vielen Dank.' });
  } catch (err) {
    console.error('❌ Mailchimp API error:', err.response?.data || err.message);

    res.status(500).json({ 
      message: '❌ Failed to subscribe email.',
      error: err.response?.data || err.message 
    });
  }
}
