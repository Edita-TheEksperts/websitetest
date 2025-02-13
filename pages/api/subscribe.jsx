const axios = require('axios');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    const apiKey = process.env.MAILCHIMP_API_KEY;
    const listId = process.env.MAILCHIMP_LIST_ID;
    const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;

    if (!apiKey || !listId || !serverPrefix) {
      return res.status(500).json({ message: 'Mailchimp API credentials are missing.' });
    }

    try {
      const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}/members/`;

      const data = {
        email_address: email,
        status: 'subscribed',
        tags: ['theekspertswebsite'],
      };

      const response = await axios.post(url, data, {
        auth: {
          username: 'anystring',
          password: apiKey,
        },
        headers: { 'Content-Type': 'application/json' },
      });

      res.status(200).json({ message: 'Vielen Dank.' });
    } catch (err) {
      console.error('Mailchimp API error:', err.response?.data || err.message);
      res.status(500).json({ message: 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};
