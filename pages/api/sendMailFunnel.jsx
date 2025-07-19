import axios from 'axios';
import qs from 'querystring';

// Replace with your Azure AD credentials
const tenantId = '5e12d93e-3010-46f9-a55f-17db43b3fcc9';
const clientId = '6b3c8303-3397-46d6-bee8-49192f0ad4f0';
const clientSecret = 'nHX8Q~cUB2YluOnfHTK6~UbmjYDRVntB01L3WbEq';

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

export default async function handler(req, res) {
    console.log("🔍 Received request:", req.body); 

    if (req.method === 'POST') {
        const { name, unternehmen, email, telefon, nachricht, dienstleistung, customService, starten } = req.body;

        // Check which fields are missing
        if (!name) console.error(" Missing: name");
        if (!unternehmen) console.error("Missing: unternehmen");
        if (!email) console.error("Missing: email");
        if (!telefon) console.error("Missing: telefon");
        if (!nachricht) console.error("Missing: nachricht");
        if (!dienstleistung) console.error("Missing: dienstleistung");
        if (!starten) console.error("Missing: starten");

        // Validate required fields (customService is OPTIONAL)
        if (!name || !unternehmen || !email || !telefon || !nachricht || !dienstleistung || !starten) {
            return res.status(400).json({ message: 'Missing required fields', received: req.body });
        }

        try {
            console.log("All required fields are present");

            // Get the access token
            const accessToken = await getAccessToken();
            console.log("Retrieved access token");

            // Create the email body with optional `customService`
            let emailContent = `You have received a new form submission:\n\n`;
            emailContent += `Name: ${name}\n`;
            emailContent += `Company: ${unternehmen}\n`;
            emailContent += `Email: ${email}\n`;
            emailContent += `Phone: ${telefon}\n`;
            emailContent += `Message: ${nachricht}\n`;
            emailContent += `Service: ${dienstleistung}\n`;
            emailContent += `Start Time: ${starten}\n`;

            // Only add `customService` if it was provided
            if (customService && customService.trim() !== "") {
                emailContent += `Custom Service: ${customService}\n`;
            }

            // Send email
            const emailResponse = await axios.post(
                'https://graph.microsoft.com/v1.0/users/info@the-eksperts.com/sendMail',
                {
                    message: {
                        subject: `New Form Submission from Funnel Page`,
                        body: {
                            contentType: 'Text',
                            content: emailContent,
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
            res.status(500).json({ message: 'Failed to send email', error: error.response?.data || error.message });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}