const express = require('express');
const router = express.Router();
const path = require('path');
const {
  findAll,
  findOne,
  addUser,
  deleteOne,
  updateUser,
  validatePassword,
} = require('../controlers/controler_user');

router.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), '/CLIENT/view/index.html'));
});

router.get('/search', (req, res) => {
  res.sendFile(path.join(process.cwd(), '/CLIENT/view/search.html'));
});

router.get('/delete', (req, res) => {
  res.sendFile(path.join(process.cwd(), '/CLIENT/view/delete.html'));
});
router.get('/update', (req, res) => {
  res.sendFile(path.join(process.cwd(), '/CLIENT/view/update.html'));
});

router.post('/api/findUser', (req, res) => {
  console.log(req.body.username);
  findOne(req.body.username).then((data) => {
    console.log(data);
    res.json(data);
  });
});
router.post('/api/findAll', (req, res) => {
  findAll().then((data) => {
    res.json(data);
  });
});

router.post('/api/registerUser', (req, res) => {
  console.log(validatePassword(req.body.password));
  if (validatePassword(req.body.password)) {
    addUser(req, res);
  } else
    res.json({
      message:
        'Password is not safe. Please use at least 8 characters, at least one small, one capital letter, one special character and one number',
    });
});

router.post('/api/deleteUser', (req, res) => {
  // console.log(req.body);
  deleteOne(req.body.username, res);
});

router.post('/api/updateUser', (req, res) => {
  // console.log(req.body);
  updateUser(res, req.body);
});
module.exports = router;
