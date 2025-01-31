// api/subscribe.js
const axios = require('axios');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    const apiKey = '3b6da7fba1aad123efaf396513574848-us15';  // Replace with your Mailchimp API key
    const listId = '7a8896d200';  // Replace with your Mailchimp List ID
    const serverPrefix = 'us15';     // Replace with your server prefix (e.g., 'us15')

    try {
      // API URL
      const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}/members/`;

      // Subscriber data
      const data = {
        email_address: email,
        status: 'subscribed',  // 'subscribed' or 'pending' for double opt-in
        tags: ['theekspertswebsite'],  // Tag for the subscriber
      };

      // Make API call to Mailchimp
      const response = await axios.post(url, data, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      });

      // Send success response back to frontend
      res.status(200).json({ message: 'Vielen Dank.' });
    } catch (err) {
      console.error('Mailchimp API error:', err);
      res.status(500).json({ message: 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
