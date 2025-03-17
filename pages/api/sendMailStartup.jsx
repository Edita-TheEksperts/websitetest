import axios from 'axios';
import qs from 'querystring';

// Replace with your Azure AD credentials
const tenantId = '5e12d93e-3010-46f9-a55f-17db43b3fcc9';
const clientId = '6b3c8303-3397-46d6-bee8-49192f0ad4f0';
const clientSecret = 'kq58Q~2_COSQYEL8ytpD83woX80WmYeLd-JGfcdI';

// Function to fetch access token from Microsoft Identity platform
const getAccessToken = async () => {
    try {
        const tokenResponse = await axios.post(
            `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
            qs.stringify({
                grant_type: 'client_credentials',
                client_id: clientId,
                client_secret: clientSecret,
                scope: 'https://graph.microsoft.com/.default',
            })
        );
        return tokenResponse.data.access_token;
    } catch (error) {
        console.error('Error fetching access token:', error.response?.data || error.message);
        throw new Error('Failed to fetch access token');
    }
};

// Handler for the incoming POST request
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { vorname, nachname, email, unternehmen, position } = req.body;

        if (!vorname || !nachname || !email || !unternehmen || !position) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        try {
            const accessToken = await getAccessToken();
            const emailResponse = await axios.post(
                'https://graph.microsoft.com/v1.0/users/info@the-eksperts.com/sendMail',
                {
                    message: {
                        subject: `New Form Submission`,
                        body: {
                            contentType: 'Text',
                            content: `Vorname: ${vorname}\nNachname: ${nachname}\nUnternehmen: ${unternehmen}\nEmail: ${email}\nPosition: ${position}`,
                        },
                        toRecipients: [{ emailAddress: { address: 'info@the-eksperts.com' } }],
                    },
                    saveToSentItems: 'true',
                },
                { headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' } }
            );

            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error.response?.data || error.message);
            res.status(500).json({ message: 'Failed to send email' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}