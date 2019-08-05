const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API);

const sendMail = (email, message) => {
    const msg = {
        to: 'mohibarshi834@gmail.com',
        from: email,
        subject: 'Contacting',
        text: message,
    };

    sgMail.send(msg)
}

module.exports = sendMail;

