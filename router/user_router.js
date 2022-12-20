const express = require('express');
const router = express.Router();
const path = require('path');
const {
  findAll,
  findOne,
  addUser,
  deleteOne,
  updateUser,
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
  // console.log(req.body.user_username);
  findOne(req.body.user_username).then((data) => {
    res.send(data);
  });
});
router.post('/api/findAll', (req, res) => {
  console.log(req.body);
  findAll().then((data) => {
    console.log(data);
    res.send(data);
  });
});

router.post('/api/registerUser', (req, res) => {
  addUser(req, res);
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
