const nodemailer = require('nodemailer');

const user = process.env.USER;
const pass = process.env.USER_PASS;

module.exports = {
    nodeMailer : async(req, res) =>{
        const bodyMsg = `
        <p>You got a mail form.</p>
        <p>User name is ${req.body.name}</p>
        <p>User email is ${req.body.email}</p>
        <p>Subject:  Contect for help.</p>
        <p>Message:  ${req.body.message}</p> `;


        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user,
                pass
            }
        })

        let mailOptions = {
            from: 'sharmamks1992@gmail.com',
            to: `${req.body.email}`,
            subject: 'Blog enquiry',
            text: 'it working',
            html: bodyMsg
        }

        transporter.sendMail(mailOptions, (err, data) => {
            if(err){
                return res.status(401).json({
                    message : "Server not responding",
                    err
                })
            }
            return res.status(200).json({
                message: 'Sent succefully'
            })
        })
    }
}