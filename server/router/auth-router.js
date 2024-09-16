const express = require("express");
const router = express.Router();
const {home} = require("../controller/auth-controller")

// router.get("/",(req,res)=>{
//     res.status(200).send('okay!!');
     
// });

router.route("/").get(home);

// router.route("/").get((req,res)=>{
//     res.status(200).send('okay!!');
     
// });
 
module.exports = router;