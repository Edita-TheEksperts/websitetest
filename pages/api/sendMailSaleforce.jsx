import axios from 'axios';
import qs from 'querystring';
import fs from 'fs';
import path from 'path';

// Azure AD Credentials
const tenantId = '5e12d93e-3010-46f9-a55f-17db43b3fcc9';
const clientId = '6b3c8303-3397-46d6-bee8-49192f0ad4f0';
const clientSecret = 'kq58Q~2_COSQYEL8ytpD83woX80WmYeLd-JGfcdI';

// Function to fetch access token
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

// Function to send an email with PDF attachment
const sendEmailWithPDF = async (recipientEmail, vorname) => {
    try {
        const accessToken = await getAccessToken();
        
        // Load the PDF file (Ensure the file exists in the public folder or appropriate path)
        const pdfPath = path.resolve('./public/response.pdf');
        const pdfContent = fs.readFileSync(pdfPath).toString('base64'); // Convert to base64

        const emailResponse = await axios.post(
            'https://graph.microsoft.com/v1.0/users/info@the-eksperts.com/sendMail',
            {
                message: {
                    subject: `Thank You, ${vorname}! Here is Your PDF`,
                    body: {
                        contentType: 'Text',
                        content: `Sehr geehrte/r ${vorname},\n\n
                        Besten Dank für Ihre Anfrage und Ihr Interesse an unseren Dienstleistungen. 
                        Im Anhang finden Sie die gewünschte Datei.\n\n
                        Falls Sie weitere Fragen haben oder zusätzliche Informationen benötigen, stehen wir Ihnen jederzeit gerne zur Verfügung.\n\n
                        Besuchen Sie auch unsere Website für weitere Informationen: www.the-eksperts.com\n\n
                        Freundliche Grüsse,\n
                        the eksperts Team`
                                            },
                    toRecipients: [{ emailAddress: { address: recipientEmail } }],
                    attachments: [
                        {
                            '@odata.type': '#microsoft.graph.fileAttachment',
                            name: 'response.pdf',
                            contentType: 'application/pdf',
                            contentBytes: pdfContent, // Attach PDF as base64
                        },
                    ],
                },
                saveToSentItems: 'true',
            },
            { headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' } }
        );

        console.log('Email with PDF sent successfully');
    } catch (error) {
        console.error('Error sending email with PDF:', error.response?.data || error.message);
    }
};

// API Route Handler
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { vorname, nachname, email, unternehmen, position } = req.body;

        if (!vorname || !nachname || !email || !unternehmen || !position) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        try {
            // Step 1: Notify admin via email
            const accessToken = await getAccessToken();
            await axios.post(
                'https://graph.microsoft.com/v1.0/users/info@the-eksperts.com/sendMail',
                {
                    message: {
                        subject: `New Form Submission From Salesforce Landing Page`,
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

            // Step 2: Send automatic email with PDF attachment
            await sendEmailWithPDF(email, vorname);

            res.status(200).json({ message: 'Emails sent successfully' });
        } catch (error) {
            console.error('Error handling request:', error.response?.data || error.message);
            res.status(500).json({ message: 'Failed to process request' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
