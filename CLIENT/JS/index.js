const list = document.getElementById('new_user');
const button = document.getElementById('sign_up');
console.log('Aaaaaaaaa');
button.addEventListener('click', () => {
  console.log('bbb');

  fetch('http://localhost:3000/api/registerUser', {
    method: 'POST',
    mode: 'cors',

    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('Aaa');
      console.log(data);
    });
});
