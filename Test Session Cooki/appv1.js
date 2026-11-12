const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const { randomBytes } = require("node:crypto");

const app = express();
const port = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === "production";
const sessionSecret =
  process.env.SESSION_SECRET ||
  (!isProduction && randomBytes(32).toString("hex"));

if (isProduction && !sessionSecret) {
  throw new Error("Set SESSION_SECRET before starting the app in production.");
}

if (!process.env.SESSION_SECRET) {
  console.warn(
    "SESSION_SECRET is not set; using a temporary development secret. Sessions will reset on restart.",
  );
}

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    name: "sid",
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: "lax",
      secure: isProduction,
      maxAge: 24 * 60 * 60 * 1000,
    },
  }),
);

app.get("/", (req, res) => {
  req.session.views = (req.session.views || 0) + 1;
  res.send(`Hello World! You have visited ${req.session.views} time(s).`);
});

app.post("/register", (req, res) => {
  const userName = req.body?.userName;
  if (typeof userName !== "string" || userName.trim() === "") {
    return res.status(400).json({ error: "userName is required." });
  }

  req.session.userName = userName.trim();
  req.session.loggedIn = true;

  res.send("Logged in successfully");
});

app.get("/protected", (req, res) => {
  if (req.session.loggedIn) {
    res.status(200).send("Ok Successful");
  } else {
    res.status(401).send("You are unauthorized");
  }
});

app.delete("/session", (req, res, next) => {
  req.session.destroy((error) => {
    if (error) {
      return next(error);
    }

    res.clearCookie("sid");
    res.sendStatus(204);
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
