let list = document.getElementById('users');
const button = document.getElementById('list_one_user');
const button_find_All = document.getElementById('list_all_users');
const input_username = document.getElementById('user_username');
button.addEventListener('click', () => {
  console.log('bbb');

  fetch('http://localhost:3000/api/findUser', {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({
      username: input_username.value,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((fafa) => {
      return fafa.json();
    })
    .then((data) => {
      list.textContent = data.first_name + '\n';
    })
    .catch((err) => {
      console.log(err);
    });
});

button_find_All.addEventListener('click', () => {
  console.log('bbb');

  fetch('http://localhost:3000/api/findAll', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((fafa) => {
      return fafa.json();
    })
    .then((data) => {
      for (const user of data) {
        list.textContent += user.first_name + '\n';
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
});
