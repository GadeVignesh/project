const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email configuration
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'vigneshgade769@gmail.com',
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00f5ff; border-bottom: 2px solid #00f5ff; padding-bottom: 10px;">
            New Portfolio Contact Message
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="background: #e3f2fd; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; background: #f0f0f0; border-radius: 10px;">
            <p style="color: #666; margin: 0;">
              This message was sent from your portfolio website contact form.
            </p>
          </div>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to sender
    const confirmationMail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting me!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00f5ff; border-bottom: 2px solid #00f5ff; padding-bottom: 10px;">
            Thank You for Your Message!
          </h2>
          
          <p>Hi ${name},</p>
          
          <p>Thank you for reaching out through my portfolio website. I've received your message and will get back to you as soon as possible.</p>
          
          <div style="background: #e3f2fd; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Your Message:</h3>
            <p style="line-height: 1.6; color: #555;">${message}</p>
          </div>
          
          <p>I typically respond within 24-48 hours. If you have any urgent inquiries, feel free to reach out directly at vigneshgade769@gmail.com.</p>
          
          <p>Best regards,<br>
          <strong>Gade Vignesh</strong><br>
          AI & ML Enthusiast</p>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; background: #f0f0f0; border-radius: 10px;">
            <p style="color: #666; margin: 0;">
              This is an automated confirmation email from my portfolio website.
            </p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(confirmationMail);

    res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully!' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      error: 'Failed to send message. Please try again later.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'Server is running!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});