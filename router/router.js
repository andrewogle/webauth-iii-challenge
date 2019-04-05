const userRouter = require('../users/userRouter');
const express = require('express');
const router = express.Router(); 

// router.use('/', authRouter);
router.use('/', userRouter);

module.exports = router;