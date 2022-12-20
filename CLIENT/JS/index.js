const list = document.getElementById('new_user');
const button = document.getElementById('sign_up');
console.log('Aaaaaaaaa');
button.addEventListener('click', () => {
  console.log('bbb');
  fetch(
    'http://localhost:3000/api/register'
    // , {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // }
  )
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
      window.location.href = 'http://localhost:3000/';
    });
});
