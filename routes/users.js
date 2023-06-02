var express = require('express');
var router = express.Router();
const User = require('../model/User');
const { getAllUsers, newUser, email, username, updateuser, deleteuser } = require("../controller/usersController")

router.get("/all-users", getAllUsers)

// /* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.send('respond with a resource');
// });

// router.get('/all-users', async (req, res) => {
//   try {
//     const allUsers = await User.find({});
//     res.status(200).json({ success: true, data: allUsers });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

router.post("/new-user",newUser)
// router.post('/new-user', async (req, res) => {
//   try {
//     const { name, email, password, phone } = req.body;
//     const user = {
//       name: name,
//       email: email,
//       password: password,
//       phone: phone
//     };
//     const newUser = await new User(user)// calls User model
//     const saveUser = await newUser.save(); // calls line 29
//     res.status(500).json({ success: true, data: saveUser });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });
router.get("/user/:email", email)
// //creat a get route, find email using the fondOne method, use req. params.
// router.get("/user/:email", async(req,res) =>{
//   try {
//     const email = req.params.email;
//     const user = await User.findOne({ email: email})
//     if( !user ){
//       return res.status(400).json({success: false, message: "User not found"});
//     }
//     res.status(200).json({success: true, data: user})
//   } catch (error) {
//     console.log(erorr)
//     res.status(500).json({success: false, message: error.message })
//   }
// })

// //create a get route, find all users with the same name, use req.query

router.get("/user-name/:name",username)

// router.get("/user-name/:name", async (req,res)=>{
//   try {
//     const name = req.query.name
//     const users = await User.find({ name: {$regex: new RegExp(name, "i" )}})
//     if( !users ){
//       return res.status(400).json({success: false, message: "No users with that name"});
//     }
//     res.status(200).json({success: true, data: users})
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({success: false, message: error.message })
//   }
// })
router.put("/update-users/:id", updateuser)
// router.put("/update-users/:id", async (req, res)=>{
//   try {
//     const updateUser  = await User.findOneAndUpdate({
//       _id: req.params.id}, req.body);
//       if(!updateUser) return res.status(400).json({success: false, message: "user not found"})
//       res.status(200).json({success: true, data: updateUser});
//   } catch (error) {
//     res.status(500).json({success:false, message: error.message})
//   }
// })

router.delete("/delete-user/:id",deleteuser)

// router.delete("/delete-user/:id", async(req,res) =>{
//  try {
//   const deleteUser = await User.findOneAndDelete({
//     _id: req.params.id}, req.body)
//     if(!deleteUser) return res.status(400).json({success: false, message: "user not deleted"})
//     res.status(200).json({success: true, data: deleteUser});
//  } catch (error) {
//   res.status(500).json({success:false, message: error.message})
//  }
// })


module.exports = router;
