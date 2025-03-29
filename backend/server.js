require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

    // Log server environment
    console.log(`Environment: ${process.env.NODE_ENV}`);

    // If using test email in development, log it
    if (process.env.NODE_ENV !== 'production' && process.env.USE_TEST_EMAIL === 'true') {
        console.log('Using test email account for development');
    }
});