const nodemailer = require('nodemailer');
const emailConfig = require('../config/email');

/**
 * Send notification email to company about a new contact form submission
 */
exports.sendContactNotification = async (formData) => {
    // Get transporter
    const transporter = await emailConfig.getTransporter();

    // Setup email data
    const mailOptions = {
        from: `"Formulario de Contacto" <${process.env.MAIL_FROM}>`,
        to: process.env.MAIL_TO,
        subject: `Nuevo mensaje de contacto - ${formData.producto}`,
        replyTo: formData.email,
        text: `
      Nombre: ${formData.name}
      Email: ${formData.email}
      Producto de interés: ${formData.producto}
      Fecha: ${new Date(formData.date).toLocaleString('es-ES')}
      
      Mensaje:
      ${formData.message}
    `,
        html: `
      <h3>Nuevo mensaje desde el formulario de contacto</h3>
      <p><strong>Nombre:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Producto de interés:</strong> ${formData.producto}</p>
      <p><strong>Fecha:</strong> ${new Date(formData.date).toLocaleString('es-ES')}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${formData.message.replace(/\n/g, '<br>')}</p>
    `
    };

    // Send mail
    const info = await transporter.sendMail(mailOptions);

    // Log URL for test emails
    if (process.env.NODE_ENV !== 'production' && process.env.USE_TEST_EMAIL === 'true') {
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    }

    return info;
};

/**
 * Send confirmation email to user
 */
exports.sendConfirmationEmail = async (formData) => {
    // Get transporter
    const transporter = await emailConfig.getTransporter();

    // Setup email data
    const mailOptions = {
        from: `"${process.env.COMPANY_NAME || 'Corporación Scio'}" <${process.env.MAIL_FROM}>`,
        to: formData.email,
        subject: 'Hemos recibido tu mensaje',
        text: `
      Estimado/a ${formData.name},
      
      Gracias por contactarnos. Hemos recibido tu mensaje y nos pondremos en contacto contigo a la brevedad posible.
      
      Atentamente,
      El equipo de ${process.env.COMPANY_NAME || 'Corporación Scio'}
    `,
        html: `
      <p>Estimado/a ${formData.name},</p>
      <p>Gracias por contactarnos. Hemos recibido tu mensaje y nos pondremos en contacto contigo a la brevedad posible.</p>
      <p>Atentamente,<br>El equipo de ${process.env.COMPANY_NAME || 'Corporación Scio'}</p>
    `
    };

    // Send mail
    const info = await transporter.sendMail(mailOptions);

    // Log URL for test emails
    if (process.env.NODE_ENV !== 'production' && process.env.USE_TEST_EMAIL === 'true') {
        console.log('Confirmation email preview URL: %s', nodemailer.getTestMessageUrl(info));
    }

    return info;
};