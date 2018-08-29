const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
let userPassword;

// console.log(adminLogin);
// console.log(adminLogin.length);
//
// console.log(adminPassword);
// console.log(typeof adminPassword);
// console.log(adminPassword.length);


let userName = prompt('Enter login');
if (userName === null) {
    alert('Отменено пользователем');
} else if (userName === adminLogin) {
    userPassword = prompt('Введите пароль'); {
        if (userPassword === null) {
            alert('Пароль. Отменено пользователем');
        } else if (userPassword === adminPassword) {
            alert('Welcome');
        } else {
            alert('Неверный пароль. Доступ запрещен')
        }
    }
} else {
    alert ('Неверный логин. Доступ запрещен');
}


