const express = require("express");
const contactUsRouter = express.Router();
const nodemailer = require("nodemailer");

contactUsRouter.post("/contactus", async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;

        const transport = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'sashiadapa@gmail.com',
                pass: 'ewzh acqm oypm mqco',
            }
        });

        const mailOptions = {
            from: `${email}`,
            to: 'sashankadapa2@gmail.com',
            subject: `Contact us reg - ${subject}`,
            text: `Name: ${name}\n Email: ${email}\n Phone: ${phone}\n Message: ${message}`
        };
        transport.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.send({ status: 'failed', message: 'An error occurred while sending email' });
            } else {
                return res.send({ status: 'success', message: 'Email sent successfully' });
            }
        });
    } catch (error) {
        res.send({ status: 'failed', message: 'An error occurred' });
    }
});

module.exports = contactUsRouter;
