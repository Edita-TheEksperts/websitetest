import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, email, message, topics } = req.body;

    try {
      // Set up Nodemailer transport
      const transporter = nodemailer.createTransport({
        host: "smtp.your-email-provider.com", // Replace with your email provider's SMTP host
        port: 587, // Replace with your SMTP port
        auth: {
          user: "your-email@example.com", // Your email address
          pass: "your-email-password", // Your email password
        },
      });

      // Email to `info@the-eksperts.com`
      await transporter.sendMail({
        from: `"The Eksperts Contact Form" <your-email@example.com>`, // Replace with your email
        to: "info@the-eksperts.com",
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        text: `You have a new contact form submission:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nTopics: ${topics.join(
          ", "
        )}\nMessage: ${message}`,
      });

      // Acknowledgment email to the user
      await transporter.sendMail({
        from: `"The Eksperts Team" <your-email@example.com>`, // Replace with your email
        to: email,
        subject: "We Received Your Message!",
        text: `Dear ${firstName},\n\nThank you for reaching out to us. We have received your message and will get back to you soon.\n\nBest regards,\nThe Eksperts Team`,
      });

      res.status(200).json({ message: "Emails sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end("Method Not Allowed");
  }
}
