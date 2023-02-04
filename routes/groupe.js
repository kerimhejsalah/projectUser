const express = require('express');
const { Groupe } = require('../models/group');
const router = express.Router();


// create groupe 
router.post('/' ,async (req, res) => {
  try {
    let obj = req.body;
    let groupe = new Groupe(obj);
    let findEmailInGroupe = await User.findOne({ nom: groupe.nom })
    if(!findEmailInGroupe){
      groupe.nom=obj.nom
      let savedgroupe = await groupe.save()
      res.status(200).send({"groupetCreate":savedgroupe});
    }else{
      res.status(404).send('nom invalid')
    }
  
  } catch (error) {
    res.status(400).send({ message: "Erreur", error });
  }
});

// get all groupe 
router.get('/' ,async (req, res) => {
  try {
    let groupes = await Groupe.find();
    res.status(200).send(groupes);
  } catch (error) {
    res.status(400).send({ message: "Erreur", error });
  }
});

// get groupe par id
router.get('/:id', async (req, res) => {
  try {
    let id = req.params.id;
    let groupe = await Groupe.findOne({ _id: id });
    res.status(200).send(groupe);
  } catch (error) {
    res.status(400).send({ message: "Erreur", error });
  }
});

// update groupe
router.put('/:id', async (req, res) => {
    try {
      let id = req.params.id;
      let obj = req.body;
      let updated = await Groupe.findByIdAndUpdate({ _id: id }, { $set: { nom : obj.nom } });
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