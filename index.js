// console.log("Hello from LCO 2")

const express = require('express');
const format = require("date-format");

const app = express();

// const PORT = 4000 || process.env.PORT;    // getting port numbers from a central location
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
    // res.send("Hello World!");
    res.status(200).send("<h2>Hello from LCO</h2>");
});


app.get("/api/v1/linkedin", (req, res)=>{
    const instaSocial = {
        username:"akkiLinkedIn",
        followers: 800,
        follows: 80,
        // date: Date.now()
        date: format.asString("dd[MM] - hh:mm:ss", new Date())
    };

    res.status(200).json(instaSocial);
});

app.get("/api/v1/facebook", (req, res)=>{
    const instaSocial = {
        username:"akkiFB",
        followers: 88,
        follows: 10,
        date: format.asString("dd[MM] - hh:mm:ss", new Date())
    };

    res.status(200).json(instaSocial);
});

app.get("/api/v1/instagram", (req, res)=>{
    const instaSocial = {
        username:"akkiInsta",
        followers: 66,
        follows: 70,
        date: format.asString("dd[MM] - hh:mm:ss", new Date())
    };

    res.status(200).json(instaSocial);
});

// or "/api/v1/:token/:id" so we get parameters in 2 parts 
app.get("/api/v1/:token", (req, res)=>{
    console.log(req.params.token);
    res.status(200).json({param: req.params.token});
});

app.listen(PORT, ()=>{  //callback
    console.log(`Server is running at ${PORT}`);
});