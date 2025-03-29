const emailService = require('../services/email');

/**
 * Handle contact form submission
 */
exports.submitContactForm = async (req, res, next) => {
    try {
        const { name, email, message, producto } = req.body;

        // Validate input
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: 'Por favor, complete todos los campos requeridos'
            });
        }

        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Por favor, ingrese un correo electrónico válido'
            });
        }

        // Prepare form data
        const formData = {
            name,
            email,
            message,
            producto: producto || 'No especificado',
            date: new Date().toISOString()
        };

        // Send email
        await emailService.sendContactNotification(formData);

        // Send confirmation email if configured
        if (process.env.SEND_CONFIRMATION === 'true') {
            await emailService.sendConfirmationEmail(formData);
        }

        // Return success response
        res.status(200).json({
            success: true,
            message: 'Mensaje enviado con éxito'
        });

    } catch (error) {
        console.error('Error processing contact form:', error);
        next(error);
    }
};