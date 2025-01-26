//https://dev.to/anticoder03/how-to-connect-a-react-app-with-mongodb-a-complete-guide-227a

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const uri = "mongodb+srv://marcissism:Bt163h5YmkZo1cyC@lifetrackerapp.donpw.mongodb.net/?retryWrites=true&w=majority&appName=LifeTrackerApp";
mongoose.connect(uri, {
    useNewURLParser: true,
});

const db = mongoose.connection;
db.on('error', (error)=>console.error(error));
db.once('open', ()=>console.log('Connected to MongoDB'));

// Routes
app.get('/', (req, res) => {
    res.send("Hello from Express");
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});


/// Create API Routes
const User = require('./model/User');
// Create User
app.post('/Users', async (req, res) => {
    const user = new User({
        userID: req.body.userID,
        username: req.body.username,
        legendArray: req.body.legendArray
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({message: err.message});
    }

});
// Get all users
app.get('/Users', async (req, res) => {
    try {
        console.log(await db.find().toArray());
        console.log(response.data);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});


