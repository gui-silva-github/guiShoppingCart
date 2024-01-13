let open = document.querySelector('.shopping');

let close = document.querySelector('.closeShopping');

open.addEventListener("click", ()=>{
    document.body.classList.add("active");
});

close.addEventListener("click", ()=>{
    document.body.classList.remove("active");
});

let products = [
    {
        id: 1,
        name: 'Rolex Perpetual',
        src: 'imgs/11.jpg',
        price: 1500
    },
    {
        id: 2,
        name: 'Fila Max Gran',
        src: 'imgs/15.jpg',
        price: 1000
    },
    {
        id: 3,
        name: 'Nike Sir.',
        src: 'imgs/9.jpg',
        price: 1300
    },
    {
        id: 4,
        name: 'K-Swiss',
        src: 'imgs/13.jpg',
        price: 1200
    },
    {
        id: 5,
        name: 'Nike Air',
        src: 'imgs/14.jpg',
        price: 1150
    },
    {
        id: 6,
        name: 'Nike Jr.',
        src: 'imgs/12.jpg',
        price: 800
    },
    {
        id: 7,
        name: 'Tom Ford',
        src: 'imgs/10.jpg',
        price: 1700
    },
    {
        id: 8,
        name: 'Nike Air TR',
        src: 'imgs/16.jpg',
        price: 1000
    },
    {
        id: 9,
        name: 'Rolex Explore',
        src: 'imgs/8.jpg',
        price: 1600
    },
    {
        id: 10,
        name: 'Nike Air TM',
        src: 'imgs/7.jpg',
        price: 700
    },
    {
        id: 11,
        name: 'N Speed Run',
        src: 'imgs/6.jpeg',
        price: 1300
    },
    {
        id: 12,
        name: 'Adidas Soft',
        src: 'imgs/5.jpg',
        price: 1800
    },
    {
        id: 13,
        name: 'Master Kick',
        src: 'imgs/3.webp',
        price: 1500
    },
    {
        id: 14,
        name: 'Nike Jordan',
        src: 'imgs/1.jpeg',
        price: 1750
    },
    {
        id: 15,
        name: 'Jump Kick',
        src: 'imgs/4.jpeg',
        price: 600
    },
    {
        id: 16,
        name: 'Oakley Sight',
        src: 'imgs/18.jpeg',
        price: 500
    },
    {
        id: 17,
        name: 'Adidas Bongo',
        src: 'imgs/2.jpg',
        price: 1200
    },
    {
        id: 18,
        name: 'Vision Relative',
        src: 'imgs/17.jpeg',
        price: 700
    }
];

let list = document.querySelector('.list');

let item = document.getElementsByClassName('item'); 

const initApp = () =>{

    products.forEach((value, key)=>{
        
        let newDiv = document.createElement('div');
        newDiv.classList.add("item");

        newDiv.innerHTML = `
            <img src="${value.src}">
            <div class="title">${value.name}</div>
            <div class="price">R$ ${value.price.toLocaleString()},00</div>
            <button onclick="addToCard(${key})">Add to Card</button>
        `;

        list.appendChild(newDiv);

    });

};

initApp();

let listCard = document.querySelector('.listCard');

let imgs = document.getElementsByTagName('img');

let quantityElement = document.querySelector('.quantity');

let total = document.querySelector('.total');

let listCards = [];

const addToCard = (key)=>{

    item[key].style.background = 'purple';
    item[key].style.color = 'white'; 

    if (listCards[key]==null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }

    reloadCard();

};

const reloadCard = ()=>{

    listCard.innerHTML = '';
    cardCount = 0;
    count = 0;
    totalPrice = 0;

    listCards.forEach((value, key)=>{

        totalPrice+=value.price;
        count+=value.quantity;
        cardCount+=value.quantity;

        if (value!=null){

            let newLi = document.createElement('li');

            newLi.innerHTML = `
                <div><img src="${value.src}"></div>
                <div class="cardTitle">${value.name}</div>
                <div class="cardPrice">R$ ${value.price.toLocaleString()},00</div>
                <div>
                <button style="background=""#560bad;" class="cardButton" onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                <div class="count">${count}</div>
                <button style="background=""#560bad;" class="cardButton" onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `;

            listCard.appendChild(newLi);

        };

        total.innerText = `R$ ${totalPrice.toLocaleString()},00`;
        quantityElement.innerText = `${cardCount}`;

        count=0;

    });

    changeSize();

};

const changeSize = ()=>{
    let cont = (document.getElementsByTagName('img').length-19);

    if(cont < 4){
        for (i=0;i<cont;i++){
            let add = i + 19;
            imgs[add].style.height = '200px';
            imgs[add].style.margin = '10px';
        }
    } else if (cont > 3 && cont < 7){
        for (i=0;i<cont;i++){
            let add = i + 19;
            imgs[add].style.height = '90px';
            imgs[add].style.margin = '10px';
        }
    } else if (cont > 6 && cont < 10){
        for (i=0;i<cont;i++){
            let add = i + 19;
            imgs[add].style.height = '50px';
            imgs[add].style.margin = '10px';
        }
    } else if (cont > 9 && cont < 13){
        for (i=0;i<cont;i++){
            let add = i + 19;
            imgs[add].style.height = '40px';
            imgs[add].style.margin = '6px';
        }
    } else if (cont > 12 && cont < 16){
        for (i=0;i<cont;i++){
            let add = i + 19;
            imgs[add].style.height = '35px';
            imgs[add].style.margin = '3px';
        }
    } else {
        for (i=0;i<cont;i++){
            let add = i + 19;
            imgs[add].style.height = '27px';
            imgs[add].style.margin = '2px';
        }
    };
};

const changeQuantity = (key, quantity)=>{

    if (quantity==0){
        delete listCards[key];
        item[key].style.background = 'white';
        item[key].style.color = 'black'; 
        quantityElement.innerText = 0;
        total.innerText = "R$ 0,00";
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();

};