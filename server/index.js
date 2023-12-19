const express = require('express');
const axios = require('axios');
const app = express();
const PrismaClient = require('@prisma/client').PrismaClient;
const bodyParser = require('body-parser');

const prisma = new PrismaClient();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3001;

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!!!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const user = await prisma.user.create({
    data: {
      username,
      password
    }
  });
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      username
    }
  });
  if (!user) {
    res.status(401).json({ isLoggedIn: false, message: 'User not found' });
    return;
  }
  if (user.password !== password) {
    res.status(401).json({ isLoggedIn: false, message: 'Incorrect password' });
    return;
  }

  res.send({ isLoggedIn: true });
  console.log("Login successful");
});

app.listen(3002, () => {
  console.log('Server is running on port 3002');
});