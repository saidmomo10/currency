var express = require('express');
const router = express.Router();
const History = require('../historyModel');
const User  = require('../userModel');
// router.get('/histories', async (req, res) => {
//   try{
//     const histories = await History.find().populate("user");
//     res.json(histories);
//   }catch(err){
//     console.error(err);
//     res.status(500).json({ error: 'Erreur lors de la récupération des données.' });
//   }
// })

router.post('/history/:user_id', async (req, res) => {
  try{
    const user_id = req.params.user_id;
    const {departValue, firstCurrency, secondCurrency} = req.body;
    if(!user_id){
      res.status(404).send({msg: "Session expirée"})
    }

    const newHistory = new History({
      departValue,
      firstCurrency,
      secondCurrency,
      user_id,
    })
    const addHistory = await newHistory.save();
    res.status(200).send(addHistory);
    }catch(err){
      console.error(err);
      res.status(500).json({ error: 'Erreur lors de la récupération des données.' })
  }
})

router.get('/history/:user_id', async (req, res) => {
  try{
    const user_id = req.params.user_id;
    const histories = await History.find({user_id: user_id});
    res.status(200).send(histories);
    }catch(err){
      console.error(err);
      res.status(500).json({ error: 'Erreur lors de la récupération des données.' })
  }
})




// router.post('history/store', async (req, res) => {
//   const newHistory = new HitoryModel({
//     id: _id,
//     departValue: req.body.departValue,
//     firstCurrency: req.body.firstCurrency,
//     secondCurrency: req.body.secondCurrency,
//     userId : req.body.userId
//   })
//   try {
//     const history = await newHistory.save()
//     console.log(history);
//     return res.status(201).send(history)
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Erreur lors de la récupération des données.' })
//     }
// });

router.post

  module.exports = router;
