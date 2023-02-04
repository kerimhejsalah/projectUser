const express = require('express');
const { User } = require('../models/user');
const router = express.Router();


// get user par id
router.post('/' ,async (req, res) => {
  try {
    let obj = req.body;
    let user = new User(obj);
    let findEmailInUser = await User.findOne({ email: user.email })
    if(!findEmailInUser){
      user.email=obj.email
      user.nom=obj.nom
      user.prénom=obj.prenom
      user.actif=obj.actif
      user.datecréation=obj.datecreation
      
      let saveduser = await user.save()
      res.status(200).send({"usertCreate":saveduser});
    }else{
      res.status(404).send('email invalid')
    }
  
  } catch (error) {
    res.status(400).send({ message: "Erreur", error });
  }
});

// get all user
router.get('/' ,async (req, res) => {
  try {
    let users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send({ message: "Erreur", error });
  }
});

// get user par id
router.get('/:id', async (req, res) => {
  try {
    let id = req.params.id;
    let user = await User.findOne({ _id: id });
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ message: "Erreur", error });
  }
});

// update user par id
router.put('/:id', async (req, res) => {
    try {
      let id = req.params.id;
      let obj = req.body;
      let updated = await User.findByIdAndUpdate({ _id: id }, { $set: { email:  obj.email ,nom:obj.nom,prénom:obj.prenom,actif:obj.actif,datecréation:obj.datecreation } });
      if (!updated) {
        res.status(404).send('User not found')
      } else {
        res.status(200).send(updated);
      }
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: "Erreur", error });
    }
  });



module.exports = router;