const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/api/users', restricted,  (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.post('/api/users', async (req, res) => {
    try {
        const user = await Users.add(req.body)
        res.status(201).json(user)
    } catch(error) {
        res.status(500).json(error)
    }
})

module.exports = router;
