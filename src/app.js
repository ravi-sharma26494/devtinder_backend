const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use(
    "/user",
    (req, res, next)=>{
        console.log("Handling route 1 !!");
        next();
        // res.send("Hello from route 1 !!");
    },,
    (req, res, next)=>{
        console.log("Handling route 2 !!");
        next();
        // res.send("Hello from route 2 !!");
    },
    (req, res, next)=>{
        console.log("Handling route 3 !!");
        next();
        // res.send("Hello from route 3 !!");
    },
    (req, res, next)=>{
        console.log("Handling route 4 !!");
        next();
        // res.send("Hello from route 4!!");
    }
)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});