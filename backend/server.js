const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieparser=require('cookie-parser');
const app = express();
app.use(cookieparser());
dotenv.config();
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials:true
  })
);

app.get("/hello", (req, res) => {
    // Set a cookie with a token

    const expiryDate = new Date();
expiryDate.setTime(expiryDate.getTime() + (3600000 * 2)); // 2 hours from now

res.cookie('token', 'tight', {
  httpOnly: true,
  secure: true,
  sameSite: 'None',
  expires: expiryDate,
  maxAge: 3600000 * 2, // 2 hours
  path: '/', // Ensure the cookie is available across all paths
});

      // Send the JSON response
    res.json({ "hello": "world" });
  });

  app.get("/yoyoyo", (req, res) => {
  
      const value=req.cookies.token;
      console.log(req.cookies);
        // Send the JSON response
      res.json({ "hello": value });
    });

  app.listen(3001, () => {
  console.log("port listening at port 3001");
});

