const express = require("express");
const router = express.Router();
const sendEmails = require("../config/email");

// POST /send-emails
router.post("/send-emails", async (req, res) => {
  const body = req.body || {};
  let { subject, recipients } = body;

  // Default subject if not provided
  subject = subject || "Attention Needed";

  // Fallback list (used if no recipients provided)
  if (!Array.isArray(recipients) || recipients.length === 0) {
    recipients = [
      {
        name: "Lauren",
        email: "bsl6282820@gmail.com",
        company: "Toyota of Berkeleys I-80 Junction",
        senderName: "Delila",
      },
      {
        name: "You",
        email: "ebbn673738@gmail.com",
        company: "Dayton's Bluff Neighborhood Housing Services",
        senderName: "Sandra",
      },
      //   {
      //     name: "Michael",
      //     email: "michael@example.com",
      //     company: "NovaTech Inc",
      //     senderName: "John",
      //   },
      // You can add more recipients here for testing
    ];
  }

  const emailPromises = recipients.map((recipient) => {
    const { name, email, company, senderName } = recipient;

    const personalizedMessage = `Hello ${name},\n\nThis is a heads-up for my next incoming payroll. I will be making an update with my new banking details. Kindly let me know what info is required.\n\nThanks,\n${senderName}\n${company}`;

    return sendEmails(
      email,
      subject,
      personalizedMessage,
      company || senderName
    );
  });

  const results = await Promise.allSettled(emailPromises);
  const success = results.filter((r) => r.status === "fulfilled").length;
  const failed = results.length - success;

  res.status(200).json({
    message: "Emails processed.",
    total: recipients.length,
    successCount: success,
    failureCount: failed,
  });
});

module.exports = router;
