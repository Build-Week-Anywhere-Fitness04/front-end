const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 5000;
const app = express();
const token =
  "esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ";

let friends = [
  {
    id: 1,
    theClassName: "Beginner Yoga",
    classType: "Yoga",
    classStartTime: "12:00 PM",
    classDuration: "60",
    classIntensity: "Easy",
    classLocation: "GymA",
    numberAttendees: "5",
    maxClassSize: "10",
  },
  {
    id: 2,
    theClassName: "Advanced Yoga",
    classType: "Yoga",
    classStartTime: "2:00 PM",
    classDuration: "60",
    classIntensity: "Hard",
    classLocation: "GymB",
    numberAttendees: "7",
    maxClassSize: "10",
  },
  {
    id: 3,
    theClassName: "Moderate Weight Training",
    classType: "Weight Training",
    classStartTime: "9:00 AM",
    classDuration: "45",
    classIntensity: "Moderate",
    classLocation: "GymC",
    numberAttendees: "12",
    maxClassSize: "20",
  },
];

app.use(bodyParser.json());

app.use(cors());

let nextId = 7;

function getNextId() {
  return nextId++;
}

function authenticator(req, res, next) {
  const { authorization } = req.headers;
  if (authorization === token) {
    next();
  } else {
    res.status(403).json({ error: "User must be logged in to do that." });
  }
}

app.post("/api/user/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "lambda" && password === "school") {
    req.loggedIn = true;
    res.status(200).json({
      payload: token,
    });
  } else {
    res
      .status(403)
      .json({ error: "Username or Password incorrect. Please see Readme" });
  }
});

app.post("/api/logout", authenticator, (req, res) => {
  req.loggedIn = false;
  res.status(200).json({
    payload: token,
  });
});

app.get("/api/classes", authenticator, (req, res) => {
  setTimeout(() => {
    res.send(friends);
  }, 1000);
});

app.get("/api/classes/:id", authenticator, (req, res) => {
  const friend = friends.find((f) => f.id == req.params.id);

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).send({ msg: "Friend not found" });
  }
});

app.post("/api/classes", authenticator, (req, res) => {
  const friend = { id: getNextId(), ...req.body };

  friends = [...friends, friend];

  res.send(friends);
});

app.get("/api/", (req, res) => {
  res.status(200).json({ status: "served" });
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
