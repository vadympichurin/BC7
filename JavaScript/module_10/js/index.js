//      https://test-users-api.herokuapp.com/users/

let usersList = document.querySelector('.users-list');
let formAddUser = document.querySelector('.add-user');
let inputName = document.querySelector('[name="name"]');
let inputAge = document.querySelector('[name="age"]');

//-----------------------------------------------------------------

const getAllUsers = () => {
    fetch('https://test-users-api.herokuapp.com/users/')
        .then(result => result.ok ? result.json() : null)
        .then(info => createUsersCard(info.data))
        .catch(error => console.log(error));
};

const createUsersCard = (arr) => {
    usersList.innerHTML = '';
    arr.map(el => {
        let userItem = document.createElement('li');

        userItem.setAttribute('id', el.id);
        userItem.textContent = `name: ${el.name}, age: ${el.age}`;

        usersList.append(userItem);
    });
};

window.addEventListener('DOMContentLoaded', getAllUsers);

// --------------------------------------------------------------

let userID = document.querySelector('[name="id"]');
let formFindUser = document.querySelector('.find-user');

const getUserById = () => {
    event.preventDefault();
    let value = userID.value;
    fetch(`https://test-users-api.herokuapp.com/users/${value}`)
        .then(result => result.ok ? result.json() : null)
        .then(user => createUsersCard([user.data]))
        .catch(error => console.log(error));
    userID.value = '';
};

formFindUser.addEventListener('submit', getUserById);

//--------------------------------------------------------------


const addUser = () => {
    event.preventDefault();
    let name = inputName.value;
    let age = inputAge.value;
    console.log(name);
    console.log(age);

    fetch('https://test-users-api.herokuapp.com/users/', {
        method: 'POST',
        body: JSON.stringify({name: `${name}`, age: `${age}`}),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(result => result.ok ? result.json() : null)
        .then(data => {
            createUsersCard([data.data]);
            getAllUsers();
        })
        .catch(err => console.log(err));
    inputName.value = '';
    inputAge.value = '';
};

formAddUser.addEventListener('submit', addUser);


//-----------------------------------------------------------------------

let formDelUser = document.querySelector('.delete-user');
let inputDelUser = document.querySelector('[name="delete-id"]');

const removeUser = () => {
    event.preventDefault();
    let delId = inputDelUser.value;

    fetch(`https://test-users-api.herokuapp.com/users/${delId}`, {
        method: 'DELETE',
    })
        .then(result => result.ok ? result.json() : null)
        .then(info => {
            getAllUsers();
            console.log(info);
            return info;
        })
        .catch(error => console.log(error));
    inputDelUser.value = '';
};

formDelUser.addEventListener('submit', removeUser);

//-------------------------------------------------------------------------------

let formUpUser = document.querySelector('.update-user');
let inputUpID = document.querySelector('[name="update-id"]');
let upName = document.querySelector('[name="update-name"]');
let upAge = document.querySelector('[name="update-age"]');

const updateUser = () => {
    event.preventDefault();

    let id = inputUpID.value;
    let name = upName.value;
    let age = upAge.value;

    let user = {
        name: `${name}`,
        age: `${age}`,
    };

    console.log(user);

    fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(result => result.ok ? result.json() : null)
        .then(data => {
            getAllUsers();
            console.log(data);
            return data;
        })
        .catch(error => console.log(error));

    inputUpID.value = '';
    upName.value = '';
    upAge.value = '';
};

formUpUser.addEventListener('submit', updateUser);

