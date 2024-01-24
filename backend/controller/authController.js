const AnimalSchema = require("../model/animalModel")
const animalModel = require("../model/animalModel")
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");

let createAnimalController = async (req,res)=>{
    let {name,email,password}=req.body
    if(!name){
        res.send({error:"please give your name"})
    }else if(!email){
        res.send({error:"please give your email"})
    }else if(!password){
        res.send({error:"please give your password"})
    }else{
        let existingEmail = await AnimalSchema.find({email:email})
        if(existingEmail.length >0){
            res.send({error:"you have already an account please login"})
        }else{
            bcrypt.hash(password, 10, async function(err, hash) {
                let animal =  {
                    name:name,
                    email:email,
                    password:hash
                }
                let reg = new AnimalSchema(animal)
                reg.save()

                const transporter = nodemailer.createTransport({
                    service: "gmail",
                    auth: {
                      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
                      user: "rahiabrar177@gmail.com",
                      pass: "rped cyms myyx qyey",
                    },
                });
                
                const info = await transporter.sendMail({
                    from: 'rahiabrar177@gmail.com', // sender address
                    to: reg.email , // list of receivers
                    subject: "Hello ✔", // Subject line
                    html: `<h1>hey ${reg.name}! this is creative it institute. thanks for login our website<h4>for your kind information</h4><p>our social media link</p><a href="https://www.facebook.com/"><img style="width:50px" src="https://i.ibb.co/fkkBjx5/download.jpg" alt="download"></a><a href="https://www.youtube.com/?app=desktop&gl=BD"><img style="width:50px" src="https://i.ibb.co/fSS3h82/red-youtube-logo-social-media-logo-197792-1803.jpg" alt="red-youtube-logo-social-media-logo-197792-1803"></a><a href="https://www.facebook.com/"><img style="width:50px" src="https://i.ibb.co/fkkBjx5/download.jpg" alt="download"></a><a href="https://www.youtube.com/?app=desktop&gl=BD"><img style="width:50px" src="https://i.ibb.co/fSS3h82/red-youtube-logo-social-media-logo-197792-1803.jpg" alt="red-youtube-logo-social-media-logo-197792-1803"></a>`, // html body
                });

                  res.send({success:"data successfully send"})

            });
    
        }
    }


     
}

module.exports = {createAnimalController}



// rped cyms myyx qyey

