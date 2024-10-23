const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'prasoon2115428@akgec.ac.in', // Your email
        pass: 'C=299792458' // Your email password or App Password
    }
});

// POST route for sending email
app.post('/send', (req, res) => {
    const { name, email, phone, subject } = req.body;

    const mailOptions = {
        from: email,
        to: 'prasoon2115428@akgec.ac.in', // Your email
        subject: `Contact Form Submission from ${name}`,
        text: `You have received a new message from:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
