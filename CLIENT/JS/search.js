let list = document.getElementById('users');
const button = document.getElementById('list_one_user');
const button_find_All = document.getElementById('list_all_users');
const input_username = document.getElementById('user_username');
// let first_name_data = '';
// console.log(first_name_data);
// console.log(list.innerText);
button.addEventListener('click', () => {
  console.log('kliknuto');

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
      console.log('u data');
      list.innerText = data.first_name;
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
        list.innerHTML += `${user.first_name} <br>`;
      }
      console.log(list.textContent);
    })
    .catch((err) => {
      console.log(err.message);
    });
});
