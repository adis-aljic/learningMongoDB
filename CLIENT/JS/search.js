const list = document.getElementById('users');
const button = document.getElementById('list_one_user');
const input_username = document.getElementById('user_username');
console.log('Aaaaaaaaa');
button.addEventListener('click', () => {
  console.log('bbb');

  fetch('http://localhost:3000/api/findUser', {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({
      username: `${input_username}`,
    }),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('Aaa');
      console.log(data);
      data.forEach((element) => {
        console.log(element);
        const li = document.createElement('li');
        li.innerHTML = element;
        list.append(li);
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
});
