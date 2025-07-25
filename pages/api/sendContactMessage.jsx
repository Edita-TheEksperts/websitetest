import axios from "axios";
import qs from "querystring";

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
        grant_type: "client_credentials",
        client_id: clientId,
        client_secret: clientSecret,
        scope: "https://graph.microsoft.com/.default",
      })
    );
    return tokenResponse.data.access_token;
  } catch (error) {
    console.error("Error fetching access token:", error.response?.data || error.message);
    throw new Error("Failed to fetch access token");
  }
};

// Handler for the new contact form
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { fullName, email, subject, message } = req.body;

    if (!fullName || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    try {
      const accessToken = await getAccessToken();

      const emailResponse = await axios.post(
        "https://graph.microsoft.com/v1.0/users/info@the-eksperts.com/sendMail",
        {
          message: {
            subject: `New Form Submission From Website Services for Startups`,
            body: {
              contentType: "Text",
              content: `You have received a new message:\n\nName: ${fullName}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
            },
            toRecipients: [
              {
                emailAddress: {
                  address: "info@the-eksperts.com",
                },
              },
            ],
          },
          saveToSentItems: "true",
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Email sent:", emailResponse.status);
      res.status(200).json({ message: "Email sent successfully", status: emailResponse.status });
    } catch (error) {
      console.error("Error sending email:", error.response?.data || error.message);
      res.status(500).json({ message: "Failed to send email", error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
