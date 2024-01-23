let checker = (req,res,next)=>{
    if(req.headers.authorization=="abrar"){
        next()
    }else{
        res.send({error: "you have no access to do your work"});
    }
}

module.exports = checker