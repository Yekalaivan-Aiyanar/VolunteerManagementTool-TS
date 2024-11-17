const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017/rts");

const contactSchema = {
    email: String,
    password: String,
    role: String,
};

const Contact = mongoose.model("Contact", contactSchema);

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.post("/contact", async (req, res) => {
    console.log("Form data recieved:", req.body.email);
    const contact = new Contact({
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    });

    try {
        await contact.save();
        console.log("Saved contact: ", contact)
        res.render("contact");
    } catch (err) {
        console.error("Error saving contact:", err);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});




/*const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");

mongoose.connect(
"mongodb://localhost:27017/rts",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

const contactSchema = {
    email:String,
    password:String,
    role:String,
};

const Contact =
    mongoose.model("Contact", contactSchema);

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.get("/contact",
    function (req, res) {
        res.render("contact");
    });

app.post("/contact",
    function (req, res) {
        console.log(req.body.email);
        const contact = new Contact({
            email:req.body.email,
            password:req.body.password,
            role:req.body.role,
        });
        contact.save(function (err) {
            if (err) {
                throw err;
            } else {
                res.render("contact");
            }
        });
    });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
*/

/*const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static(__dirname));
app.use(express.urlencoded({extended:true}))

DB_URL="mongodb://localhost:27017/rts"

mongoose.connect(DB_URL)
const db = mongoose.connection
db.once('open', ()=>{
    console.log("Connection Successful")
})

const userSchema = new mongoose.Schema({
    email:String,
    password:String,
    role:String,
})

const Users = mongoose.model("data", userSchema)

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, "public", "form.html"))
})

app.post('/post', async (req,res)=>{
    const {email, password,role} = req.body;
    const user = new Users({
        email,
        password,
        role
    })
    await user.save()
    console.log(user)
    res.send("Form submission successful")
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


*/

/*2ndTRY*/

/*
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/rts', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Connection error', error));

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a schema and model for the form data
const FormDataSchema = new mongoose.Schema({
    email: String,
    password: String,
    role: String
});
const FormData = mongoose.model('FormData', FormDataSchema);

// Handle form submissions
app.post('/submit-form', (req, res) => {
    const formData = new FormData(req.body);
    formData.save()
        .then(() => res.json({ message: 'Form data saved successfully' })) // Changed from res.send to res.json
        .catch((error) => res.status(500).json({ message: 'Error saving form data', error: error.message })); // Changed from res.send to res.json
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
*/
