const list = document.getElementById('new_user');
const button = document.getElementById('sign_up');
const input_username = document.getElementById('username');
console.log('Aaaaaaaaa');
button.addEventListener('click', () => {
  console.log('bbb');

  fetch('http://localhost:3000/api/findUser', {
    method: 'POST',
    mode: 'cors',
    body: {
      username: `${input_username}`,
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
    });
});
