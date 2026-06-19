const express = require("express")
const router =express.Router();
const User =require("../models/user")

router.post('/register', async(req, res)=>{
    const newuser = new User({name:req.body.name, email:req.body.email, password: req.body.password})
    try {
        const user = await newuser.save()
        res.send('User Registered Successfully')

    }catch(error){
        return res.status(400).json({error});

    }
});
router.post("/login", async(req, res)=>{
    const email = req.body.email?.trim().toLowerCase();
    const password = req.body.password;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try{
        const user = await User.findOne({ email, password });
        if(user){
            const temp = {
                name: user.name,
                email: user.email,
                isAdmin : user.isAdmin,
                _id: user._id,
            }
            return res.send(temp);
        }

        return res.status(400).json({ message: 'Invalid credentials' });
    }catch(error){
        return res.status(500).json({ message: error.message || 'Login failed' });
    }
});

router.get("/getallusers", async(req, res)=>{
    try {
        const users = await User.find()
        res.send(users)
    } catch (error) {
        return res.status(400).json({ error })
    }

})

module.exports=router


// const express = require("express");
// const router = express.Router();
// const User = require("../models/user")

// router.post("/register", async(req, res) =>{

//     const newuser = new User({name : req.body.name , email : req.body.email, password : req.body.password })

//     try {
//         const user = await newuser.save()
//         // console.log(user);
//         res.send('User Registered Successfully')
//     } catch (error) {
//         return res.status(400).json({ error });
//     }
// });

// router.post('/login', async(req, res) =>{
//     const {email, password} = req.body
//     console.log(req.body);
//     try {
//         const user = await User.findOne({email :  email, password :password})
//         // console.log(user);
//         if(user){
//         const temp = {
//             name : user.name, 
//             email : user.email,
//             isAdmin : user.isAdmin,
//             _id : user._id,
//         }
//             // console.log(user._id); user id WORKS PROPERLY
//             res.send(temp)
//         }
//         else{
//             return res.status(400).json({ message: 'Login failed' });
//         }
//     } catch (error) {
//         return res.status(400).json({ error });
//     }
// });

// module.exports = router