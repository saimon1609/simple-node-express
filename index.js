const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
// const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    "My Second One, i am spending time with her! she is too prettier than i imagine wow!"
  );
});

const users = [
  {
    id: "0",
    name: "shabana",
    email: "Shabana@gmail.com",
    phone: "01788888888",
  },
  {
    id: "1",
    name: "shabnoor",
    email: "shabnoor@gmail.com",
    phone: "01788888888",
  },
  {
    id: "2",
    name: "shrabonti",
    email: "shrabonti@gmail.com",
    phone: "01788888888",
  },
  {
    id: " 3",
    name: "suchorita",
    email: "suchorita@gmail.com",
    phone: "01788888888",
  },
  { id: " 4", name: "soniya", email: "soniya@gmail.com", phone: "01788888888" },
  {
    id: "5",
    name: "susmita",
    email: "susmita@gmail.com",
    phone: "01788888888",
  },
];

app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

//app.method
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("hitting the post", req.body);
  //   res.send(JSON.stringify(newUser));
  res.json(newUser);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.get("/fruits", (req, res) => {
  res.send(["mango", "oranges", "banana"]);
});
app.get("/fruits/mangoes/fazli", (req, res) => {
  res.send("Yummy Yummy tok marka fazli");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
