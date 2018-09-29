'use strict';


const laptops = [
    {
        size: 13,
        color: 'white',
        price: 28000,
        release_date: 2015,
        name: 'Macbook Air White 13"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 13,
        color: 'gray',
        price: 32000,
        release_date: 2016,
        name: 'Macbook Air Gray 13"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 13,
        color: 'black',
        price: 35000,
        release_date: 2017,
        name: 'Macbook Air Black 13"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 15,
        color: 'white',
        price: 45000,
        release_date: 2015,
        name: 'Macbook Air White 15"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 15,
        color: 'gray',
        price: 55000,
        release_date: 2016,
        name: 'Macbook Pro Gray 15"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 15,
        color: 'black',
        price: 45000,
        release_date: 2017,
        name: 'Macbook Pro Black 15"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 17,
        color: 'white',
        price: 65000,
        release_date: 2015,
        name: 'Macbook Air White 17"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 17,
        color: 'gray',
        price: 75000,
        release_date: 2016,
        name: 'Macbook Pro Gray 17"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 17,
        color: 'black',
        price: 80000,
        release_date: 2017,
        name: 'Macbook Pro Black 17"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
];


let filter = {};

let form = document.querySelector('.form');
let submit = document.querySelector('[type="submit"]');


const getAllCheckbox = () => {
    event.preventDefault();

    filter = {size: [], color: [], release_date: []};

    let sizeVal = () => {
        // event.preventDefault();
        let sizeInput = document.getElementsByName('size').forEach(el => el.checked ? filter.size.push(el.value) : null);
        return sizeInput;
    };

    let colorValue = () => {
        // event.preventDefault();
        let colorInput = document.getElementsByName('color').forEach(el => el.checked ? filter.color.push(el.value) : null);
        // console.log(colorInput);
        return colorInput;
    };

    let releaseDateValue = () => {
        // event.preventDefault();
        let releaseDateInput = document.getElementsByName('release_date').forEach(el => el.checked ? filter.release_date.push(el.value) : null);
        // console.log(releaseDateInput);
        return releaseDateInput;
    };

    sizeVal();
    colorValue();
    releaseDateValue();
    console.log(filter);
    laptopFilter();
    // console.log(laptopFilter());
    createCards(checkedLaptops);
    checkedLaptops = [];

};

submit.addEventListener('click', getAllCheckbox);

let checkedLaptops = [];

    function laptopFilter() {
        checkSize();
        checkColor();
        checkDate();


    function checkSize (){
        if (filter.size.length === 0) {
            return document.getElementsByName('size').forEach(el => filter.size.push(el.value));
        }
    };

        laptops.map(el => filter.size.map(element => parseInt(element) === el.size ? checkedLaptops.push(el) : null));

        console.log(checkedLaptops);

    function checkColor () {
        if (filter.color.length === 0){
            return document.getElementsByName('color').forEach(el => filter.color.push(el.value));
        }
    };

        // checkedLaptops = checkedLaptops.filter(el => {
        //     filter.color.map(elem => {
        //         if (el.color === elem) {
        //             return el;
        //         }
        //     })
        // });

        checkedLaptops = checkedLaptops.filter(el => {
            for (let k of filter.color){
                if(el.color === k){
                    return el;
                }
            }
        });

        // .map(el => filter.color.map(elem => elem === el.color ? el : null))

        console.log(checkedLaptops);

    function checkDate () {
        if(filter.release_date.length === 0){
            return document.getElementsByName('release_date').forEach(el => filter.release_date.push(el.value));
        }
    };

    checkedLaptops = checkedLaptops.filter(el =>{
        for(let i of filter.release_date){
            if(el.release_date === parseInt(i)){
                return el;
            }
        }
    });

        console.log(checkedLaptops);

        console.log(filter.size);
        console.log(filter);

};



let resetBtn = document.querySelector('[type="reset"]');
resetBtn.addEventListener('click', reset);

function reset() {
    document.querySelector('.cards').innerHTML = '';
    filter.size = [];
    filter.color = [];
    filter.release_date = [];
}

function createCards(arr){
    reset();
    let root = document.querySelector('.root');
    let cards = document.querySelector('.cards');
    arr.map(el =>{
        let card = document.createElement('div');
        card.classList.add('card');

        let name = document.createElement('h2');
        name.classList.add('name');
        name.textContent = el.name;

        let photo = document.createElement('img');
        photo.setAttribute('src', el.img);
        photo.setAttribute('alt' , 'photo');
        photo.classList.add('photo');

        let text = document.createElement('p');
        text.classList.add('about');
        text.textContent = el.descr;

        let color = document.createElement('span');
        color.classList.add('color');
        color.textContent =`color: ${el.color}`;

        let price = document.createElement('span');
        price.classList.add('price');
        price.textContent =`price: ${el.price}`;

        let date = document.createElement('span');
        date.classList.add('date');
        date.textContent =`release date: ${el.release_date}`;

        let size = document.createElement('span');
        size.classList.add('size');
        size.textContent =`screen size: ${el.size}`;

        card.append(name);
        card.append(photo);
        card.append(text);
        card.append(color);
        card.append(price);
        card.append(date);
        card.append(size);
        cards.append(card);
    });
    root.append(cards);
};





