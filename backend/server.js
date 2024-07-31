const express=require('express');
const cors=require('cors');
const nodemailer=require('nodemailer')
const app=express();
const PORT=process.env.PORT||5000

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post('/api/contact',(req,res)=>{
    const {name,email,message}=req.body;
    // console.log(req.body);

    const transporter=nodemailer.createTransport({
        service:'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: 'vecq lplu uvzs wolu',
          },
    })
    const mailOptions = {
        from: email,
        to: process.env.EMAIL,
        subject: 'New Contact Message from your Portfolio',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      };
    
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          res.status(500).send('Error sending email');
        } else {
          console.log('Email sent: ' + info.response);
          res.status(200).send('Message sent successfully');
        }
      });
    });

app.listen(PORT,(err)=>{
    if(err){
        console.error(err);
    }else
    console.log(`Server is running on PORT ${PORT}`);
})