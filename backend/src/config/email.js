const nodemailer = require('nodemailer');

/**
 * Get email transporter based on environment
 * Uses Ethereal for development, real mail server for production
 */
exports.getTransporter = async () => {
    // Use test account for development if enabled
    if (process.env.NODE_ENV !== 'production' && process.env.USE_TEST_EMAIL === 'true') {
        // Create a test account at Ethereal (https://ethereal.email)
        const testAccount = await nodemailer.createTestAccount();

        // Return a test transporter
        return nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: testAccount.user,
                pass: testAccount.pass,
            },
        });
    }

    // For production, use real mail server
    return nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: parseInt(process.env.MAIL_PORT) || 587,
        secure: process.env.MAIL_SECURE === 'true',
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD,
        },
    });
};