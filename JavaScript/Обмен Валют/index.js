
// 1. Спрашиваем у юзера какая у него валюта
// 2. Спрашиваем в какую валюту он хочет перевести
// 3. Спрашиваем какую сумму он хочет поменять
// 4. Вывести на экран сумму которая вышла

//Валюта : usd eur uah

const USD = 28.2;
const EUR = 32.1;
let UAH = 1;
let adoreCurrency;
let quantity;
let result;

let userCurrency = prompt('Enter your currancy: \n EUR \n UAH \n USD');
if (userCurrency === null || userCurrency === '' || !isNaN(userCurrency)) {
    alert('Поздравляем, ты выиграл премию Дарвина');
} else if (isNaN(userCurrency)) {
    userCurrency = userCurrency.toUpperCase();
    if (userCurrency === 'USD' || userCurrency === 'EUR' || userCurrency === 'UAH') {
        adoreCurrency = prompt('Enter currency what you want to change: \n EUR \n UAH \n USD');
        if (adoreCurrency === null || adoreCurrency === '' || !isNaN(adoreCurrency)) {
            alert('Поздравляем, ты выиграл премию Дарвина второй степени');
        } else if (isNaN(adoreCurrency)) {
            adoreCurrency = adoreCurrency.toUpperCase();
            if (adoreCurrency === 'USD' || adoreCurrency === 'EUR' || adoreCurrency === 'UAH') {
                quantity = prompt('Введите сумму денег, которая у вас есть');
                if (isNaN(quantity) || quantity <= 0) {
                    alert('Введите правильную сумму денег');
                } else if (userCurrency === 'UAH' && adoreCurrency === 'USD') {
                    result = (quantity/USD).toFixed(2);
                    console.log(result + ' USD');
                    alert(`You have ${result} USD`);
                } else if (userCurrency === 'UAH' && adoreCurrency === 'EUR') {
                    result = (quantity/EUR).toFixed(2);
                    console.log(result + ' EUR');
                    alert(`You have ${result} EUR`);
                } else if (userCurrency === 'USD' && adoreCurrency === 'UAH') {
                    result = (quantity*USD).toFixed(2);
                    console.log(result + ' UAH');
                    alert(`You have ${result} UAH`);
                } else if (userCurrency === 'EUR' && adoreCurrency === 'UAH') {
                    result = (quantity*EUR).toFixed(2);
                    console.log(result + ' UAH');
                    alert(`You have ${result} UAH`);
                } else {
                    alert('Мы не меняем одинаковую валюту. Дарвин плачет по тебе!');
                }
            } else {
                alert('Поздравляем, ты выиграл премию Дарвина третьей степени');
            }
        }
    } else {
        alert('We change only three currency');
    }
}
