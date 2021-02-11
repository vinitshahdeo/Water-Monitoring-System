const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const bcrypt = require("bcrypt");

const User = require("./models/Users");

const authenticateUser = require("./middlewares/authenticateUser");

const app = express();

// connect the cloud database here with Mongodb Cloud.
mongoose
  .connect("#", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connected to mongodb cloud! :)");
  })
  .catch((err) => {
    console.log(err);
  });

// middlewares
app.use(express.urlencoded({ extened: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// cookie session
app.use(
  cookieSession({
    keys: ["randomStringASyoulikehjudfsajk"],
  })
);

// route for serving frontend files
app
  .get("/", (req, res) => {
    res.render("index");
  })
  .get("/login", (req, res) => {
    res.render("login");
  })
  .get("/register", (req, res) => {
    res.render("register");
  })

  .get("/home", authenticateUser, (req, res) => {
    res.render("home", { user: req.session.user });
  });

// route for handling post requirests
app
  .post("/login", async (req, res) => {
    const { email, password } = req.body;

    // check for missing filds
    if (!email || !password) {
      res.send("Please enter all the fields");
      return;
    }

    const doesUserExits = await User.findOne({ email });

    if (!doesUserExits) {
      res.send("invalid username or password");
      return;
    }

    const doesPasswordMatch = await bcrypt.compare(
      password,
      doesUserExits.password
    );

    if (!doesPasswordMatch) {
      res.send("invalid useranme or password");
      return;
    }

    // else he\s logged in
    req.session.user = {
      email,
    };

    res.redirect("/home");
  })
  .post("/register", async (req, res) => {
    const { email, password } = req.body;

    // check for missing filds
    if (!email || !password) {
      res.send("Please enter all the fields");
      return;
    }

    const doesUserExitsAlreay = await User.findOne({ email });

    if (doesUserExitsAlreay) {
      res.send("A user with that email already exits please try another one!");
      return;
    }

    // hashing of password
    const hashedPassword = await bcrypt.hash(password, 12);
    const latestUser = new User({ email, password: hashedPassword });

    latestUser
      .save()
      .then(() => {
        res.send("registered account!");
        return;
      })
      .catch((err) => console.log(err));
  });

//logout
app.get("/logout", authenticateUser, (req, res) => {
  req.session.user = null;
  res.redirect("/login");
});

// server config
const PORT = 400; // port setup
app.listen(PORT, () => {
  console.log(`Server started listening on port: `,PORT);
});
