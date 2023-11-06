const jwt = require('jsonwebtoken')
var express = require('express');
const router = express.Router();
const User = require('../userModel');
const History = require('../historyModel');

require("dotenv").config;
const bcrypt = require('bcrypt');

router.get('/user', async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur lors de la récupération des données.' });
  }
});




router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });
    if (!user) {
      res.status(401).send('Invalid credentials');
      return;
    }

    const accessToken = generateAccessToken(user);

    res.send({ accessToken });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur lors de la récupération des données.' });
  }
});

router.post('/users', async (req, res) => {
  const { email, password, histories } = req.body;

  if (!email.includes('@')) {
    res.status(400).send('L\'adresse email doit contenir le symbole "@".');
    return;
  }

  if (password.length < 8) {
    res.status(400).send('Le mot de passe doit avoir au moins 8 caractères.');
    return;
  }

  const { departValue, firstCurrency, secondCurrency } = req.body;
  const newUser = new User({ email, password, histories: [] });
  newUser.histories.push(new History({ departValue, firstCurrency, secondCurrency }));


  await newUser.save();

  const user = await User.findOne({ email });
  const userId = user._id

  const newHistory = new History({
    departValue,
    firstCurrency,
    secondCurrency,
    histories: userId,
  });

  await newHistory.save();

  user.histories = await History.populate(user, 'histories', { populate: true }, { select: '_id' });

  await user.save();

  res.status(201).json({ user: newUser });
});

function generateAccessToken(user) {
  const userJSON = user.toJSON();
  return jwt.sign(userJSON, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '3600s' });
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401); 

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(401);
    }

    req.user = user;
    next();
  });
}

router.get('/UserPage', authenticateToken, async(req, res) => {
  const user = req.user;
  res.send(user);
});





module.exports = router;
