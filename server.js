const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const PORT = process.env.PORT || 3000;
const app = express();

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, "public", "form.html"))
})
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});






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
