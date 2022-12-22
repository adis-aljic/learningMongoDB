const list = document.getElementById('new_user');
const button = document.getElementById('sign_up');
const input_username = document.getElementById('username');
console.log('Aaaaaaaaa');
button.addEventListener('click', () => {
  console.log('bbb');
  fetch('http://localhost:3000/api/registerUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      first_name: document.getElementById('first_name').value,
      last_name: document.getElementById('last_name').value,
      username: document.getElementById('username').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
    }),
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
    });
});
