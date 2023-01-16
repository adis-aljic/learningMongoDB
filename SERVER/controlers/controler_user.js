const userSchema = require('../model/user');
const bcrypt = require('bcrypt');

const user = require('../model/user');
const connection = require('../mongoDB');

const validatePassword = (password) => {
  const pwd = password.split('');
  const length = password.length;

  let letters = 'qwertyuioplkjhgfdsazxcvbnm';
  let small_letter_collection = letters.split('');
  let capital_letter_collection = letters.toUpperCase().split('');
  let numbers_collection = '0123456789'.split('');
  let special_characters_collection = '!@#$%^&*()_?></=+='.split('');

  const small_letter = pwd.filter((element) =>
    small_letter_collection.includes(element)
  );

  const capital_letter = pwd.filter((element) =>
    capital_letter_collection.includes(element)
  );

  const special_characters = pwd.filter((element) =>
    special_characters_collection.includes(element)
  );

  const numbers = pwd.filter((element) => numbers_collection.includes(element));

  if (
    length >= 8 &&
    capital_letter.length > 0 &&
    small_letter.length > 0 &&
    numbers.length > 0 &&
    special_characters.length > 0
  ) {
    // console.log(capital_letter);
    console.log('numbers');
    return true;
  } else {
    console.log(capital_letter);
    return false;
  }
};

const addUser = async (req, res) => {
  try {
    console.log(req.body.username);
    const duplicatedUser = await user.findOne({ username: req.body.username });

    if (!duplicatedUser) {
      const new_user = req.body;
      let pwd = req.body.password;
      let password = await bcrypt.hash(pwd, 10);
      new_user.password = password;
      const user = new userSchema(new_user);
      await user.save();
      res.json(new_user);
    } else {
      res.send({ message: 'User exist' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

const findAll = async () => {
  const users = await user.find();
  //   console.log(users);
  return users || 'There is no username in database';
};
const findOne = async (data) => {
  const findOne = await user.findOne({ username: `${data}` });
  if (findOne) {
    return findOne;
  }
};

const deleteOne = async (data, res) => {
  const findDeletedUser = await findOne({ username: `${data}` });
  console.log(findDeletedUser);
  if (findDeletedUser) {
    await user.deleteOne({ username: `${data}` });
    res.send({ message: `User is deleted` });
  } else {
    res.send({ message: 'User doesnt exist' });
  }
};

const updateUser = async (res, data) => {
  const username = data.username;
  const first_name = data.first_name;
  const last_name = data.last_name;
  const email = data.email;
  const password = data.password;

  const update_user = {};
  if (!username) {
    return res.json({ message: 'You must enter username' });
  } else {
    if (first_name) update_user.first_name = first_name;
    if (last_name) update_user.last_name = last_name;
    if (email) update_user.email = email;
    if (password) {
      const pwd = await bcrypt.hash(password, 10);
      update_user.password = pwd;
    }
    const duplicatedUser = await user.findOne({ username: username });
    if (duplicatedUser) {
      const updated_user = await user.findOneAndUpdate(
        { username: `${username}` },
        update_user,
        { new: true }
      );
      res.send(updated_user);
    } else {
      res.json({ message: 'User is not found' });
    }
  }
};

module.exports = {
  addUser,
  findAll,
  findOne,
  deleteOne,
  updateUser,
  validatePassword,
};
