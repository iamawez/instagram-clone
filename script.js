const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect('mongodb+srv://awesmaniyar786:VkPGfrrRwNYuCmUC@cluster0.fuuivzp.mongodb.net/mearseries?retryWrites=true&w=majority&appName=Cluster0', {
useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define User Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique:true,
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

// Create User Model
const User = mongoose.model("Users", userSchema);

module.exports = User;
