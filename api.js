/* =============== 2. API ================= */

// API = Application Programming Interface

console.log('fetching data with API');
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))