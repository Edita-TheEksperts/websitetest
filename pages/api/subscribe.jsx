export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { email } = req.body;
  
      const API_KEY = 'your-mailchimp-api-key';
      const AUDIENCE_ID = 'your-audience-id';
      const DATACENTER = API_KEY.split('-')[1];
  
      const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;
  
      const data = {
        email_address: email,
        status: 'subscribed',
      };
  
      const options = {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };
  
      try {
        const response = await fetch(url, options);
        if (response.status >= 400) {
          throw new Error('There was an issue subscribing. Please check your email address.');
        }
        res.status(200).json({ message: 'Success! You are now subscribed.' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end('Method Not Allowed');
    }
  }
  