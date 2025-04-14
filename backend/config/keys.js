require('dotenv').config();

module.exports = {
     mongoURI: process.env.MONGO_URI,
     SMPT_HOST: process.env.SMTP_HOST,
     SMPT_PORT: process.env.SMTP_PORT,
     SMPT_SERVICE: process.env.SMTP_SERVICE, 
     SMPT_MAIL: process.env.SMTP_MAIL,
     SMPT_PASSWORD: process.env.SMTP_PASSWORD,
 };
 