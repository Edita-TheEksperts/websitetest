import axios from 'axios';
import qs from 'querystring';

// Replace with your Azure AD credentials
const tenantId = process.env.AZURE_TENANT_ID;
const clientId = process.env.AZURE_CLIENT_ID;
const clientSecret = process.env.AZURE_CLIENT_SECRET;


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
        // Destructure the form data from the request body
        const { url, email, fullname, company } = req.body;

        // Validate the incoming data
        if (!url || !email || !fullname || !company) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        try {
            // Get the access token
            const accessToken = await getAccessToken();

            // Create the email content
            const emailResponse = await axios.post(
                'https://graph.microsoft.com/v1.0/users/info@the-eksperts.com/sendMail',
                {
                    message: {
                        subject: `New Form Submission from Web Analysis Landing Page:`,
                        body: {
                            contentType: 'Text',
                            content: `You have received a new form submission:\n\nURL: ${url}\nFull Name: ${fullname} \nEmail: ${email}\nCompany: ${company}`,
                        },
                        toRecipients: [
                            {
                                emailAddress: {
                                    address: 'info@the-eksperts.com',
                                },
                            },
                        ],
                    },
                    saveToSentItems: 'true',
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            console.log('Email sent:', emailResponse.status);
            res.status(200).json({ message: 'Email sent successfully', status: emailResponse.status });
        } catch (error) {
            console.error('Error sending email:', error.response?.data || error.message);
            res.status(500).json({ message: 'Failed to send email', error: error.message });
        }
    } else {
        // Method not allowed if it's not a POST request
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}