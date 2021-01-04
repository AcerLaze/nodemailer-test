const nodemailer = require('nodemailer');
const env = require('dotenv').config();

async function main() {
    let transporter = nodemailer.createTransport({
        //Email Service
        service: process.env.SERVICE, 
        auth: {
            user: process.env.EMAIL_USERNAME, 
            pass: process.env.EMAIL_PASSWORD,
        }
    });
    //Verify success email authentication
    await transporter.verify()
    let mailOptions = {
        from: 'OwO@customUwU.com',
        to: 'jason.william@ad-ins.com',
        subject: 'O w O',
        text: 'Hewwo !'
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error.message);
        }
        console.log('success')
    })
}

main();