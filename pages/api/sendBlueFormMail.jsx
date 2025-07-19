import axios from "axios";
import qs from "querystring";

// Azure credentials
const tenantId = process.env.AZURE_TENANT_ID;
const clientId = process.env.AZURE_CLIENT_ID;
const clientSecret = process.env.AZURE_CLIENT_SECRET;


// Get Microsoft Graph token
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
    console.error("Token error:", error.response?.data || error.message);
    throw new Error("Access token fetch failed");
  }
};

// API handler
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const accessToken = await getAccessToken();

    const emailPayload = {
      message: {
        subject: `Neue Kontaktanfrage von Website (Kontaktformular)`,
        body: {
          contentType: "Text",
          content: `Neue Nachricht:\n\nName: ${name}\nEmail: ${email}\nBetreff: ${subject}\nNachricht: ${message}`,
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
    };

    const response = await axios.post(
      "https://graph.microsoft.com/v1.0/users/info@the-eksperts.com/sendMail",
      emailPayload,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.status(200).json({ message: "Mail gesendet", status: response.status });
  } catch (error) {
    console.error("Send error:", error.response?.data || error.message);
    res.status(500).json({ message: "Senden fehlgeschlagen", error: error.message });
  }
}
