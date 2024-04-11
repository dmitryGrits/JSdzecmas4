const url = 'https://jsonplaceholder.typicode.com/users';

const getData = async () => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data
    } catch (error) {
        console.log(error.message);
    }
}
localStorage.clear();
const result = await getData();
console.log(result);

const ulEl = document.querySelector('ul');
const savedUsers = JSON.parse(localStorage.getItem('user')) || [];
const h3El = document.querySelector('h3');

result.forEach(element => {
    savedUsers.push(JSON.stringify(element));
    localStorage.setItem('user', JSON.stringify(savedUsers));
    const liEl = document.createElement('li');
    liEl.textContent = element.name;
    ulEl.appendChild(liEl);
});


// const inputEl = document.querySelector('#task_input');

// const deleteUser = (text) => {
//     // const text = inputEl.value;
//     savedUsers.forEach(user => {
//         let arrEl = JSON.parse(localStorage.getItem('user'));
//         console.log(arrEl);

//         // if (user.id === text) {
//         //     // localStorage.removeItem('user');
//         //     console.log(user);
//         // } else {
//         //     h3El.textContent = 'Такого пользователя не существует'
//         // }
//     });
// };

// deleteUser('2')




