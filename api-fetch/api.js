let url1 = "https://jsonplaceholder.typicode.com/users";

fetch(url1)
.then((response) => {
    console.log(response)
    return response.json()
})
.then((json) => renderUser(json))

// syncronous

// function renderUser(users) {
//     let userList = users.map(({name, email}) => {
//         return `<li> ${name} ${email} </li>`
//     }).join('');
//     console.log(userList)
//     document.querySelector('#content').innerHTML = `<ul> ${userList} </ul>`
// }

// function renderUser(users) {
//     let list = document.createElement('ul');
//     users.forEach(element => {
//         let li = document.createElement('li');
//         li.innerText = element.name + element.email
//         list.appendChild(li);
//     });
//     document.querySelector('#content').appendChild(list)
// }

function renderUser(users) {
    let list = document.createElement('ul');
    for (let i = 0 ; i < users.length; i++) {
        let element = users[i];
        let li = document.createElement('li');
        li.innerText = element.name + " " + element.email
        list.appendChild(li);
    }
    document.querySelector('#content').appendChild(list)
}

// POST example:
let url2 = "https://jsonplaceholder.typicode.com/posts"
let data = {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'Hello world',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
}
fetch(url2, data)
.then((response) => {
    console.log(response);
    return response.json()
})
.then((json) => console.log(json))