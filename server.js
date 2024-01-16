const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const User = require("./script"); // Update the import
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/Signup", (req, res) => {
  res.render("Signup");
});

app.post("/Signup", async function (req, res) {
  const data = {
    username: req.body.username,
    password: req.body.password,
    name: req.body.name,
    email: req.body.email,
  };

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(data.password, saltRounds);
  data.password = hashedPassword;

  try {
    const newUser = new User(data); // Create a new instance of the User model
    await newUser.save(); // Save the user to the database
    console.log(newUser);
    res.render("index");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/forgot_pass", (req, res) => {
  res.render("forgot_pass");
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.post("/login", async function (req, res) {
  try {
    const check = await User.findOne({ username: req.body.username });
    if (!check) {
      res.send("User name cannot found");
    }

    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      check.password
    );

    if (!isPasswordMatch) {
      res.send("Wrong password");
    } else {
      res.render("home");
    }
  } catch {
    res.send("Wrong Details");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
