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
// localStorage.clear();
const result = await getData();
console.log(result);

const ulEl = document.querySelector('ul');
const savedUsers = JSON.parse(localStorage.getItem('user')) || [];


result.forEach(element => {
    savedUsers.push(JSON.stringify(element));
    localStorage.setItem('user', JSON.stringify(savedUsers));
    const liEl = document.createElement('li');
    liEl.textContent = element.name;
    ulEl.appendChild(liEl);
});