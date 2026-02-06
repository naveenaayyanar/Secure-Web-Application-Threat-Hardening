
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");

const app = express();
app.use(express.json());
app.use(cookieParser());

const users = []; // in-memory demo

const SECRET = "supersecretkey";

app.post("/register", async (req,res)=>{
  const {email,password} = req.body;
  const hash = await bcrypt.hash(password, 12);
  users.push({email, password: hash, role:"user"});
  res.json({status:"registered"});
});

app.post("/login", async (req,res)=>{
  const {email,password} = req.body;
  const user = users.find(u=>u.email===email);
  if(!user) return res.status(401).send("Invalid");
  const ok = await bcrypt.compare(password,user.password);
  if(!ok) return res.status(401).send("Invalid");
  const token = jwt.sign({email:user.email, role:user.role}, SECRET, {expiresIn:"15m"});
  res.cookie("token", token, {httpOnly:true, sameSite:"strict"});
  res.json({status:"logged in"});
});

function auth(req,res,next){
  try{
    const token=req.cookies.token;
    const data=jwt.verify(token,SECRET);
    req.user=data;
    next();
  }catch(e){
    res.status(401).send("Unauthorized");
  }
}

app.get("/dashboard", auth, (req,res)=>{
  res.json({message:"Welcome "+req.user.email});
});

app.listen(3000, ()=>console.log("Running on 3000"));
