'use strict';
// 1. получите все кнопки и сохраните в переменную
let but = document.querySelectorAll('button');


// 1.1 затем проитерируйтесь по кнопкам и каждой из
// них добавьте обработчик клика - функцию 
but.forEach(element => {handleClick
    element.addEventListener('click', function(event){
        handleClick(event);

    });
    
});


/**
 * Функция обрабатывает клик по кнопке в карточке товара и попеременно вызывает
 * функции для показа или скрытия текста о товаре.
 * @param {MouseEvent} clickedButtonEvent 
 */
function handleClick(clickedButtonEvent) {
    // 2. из объекта события получите ссылку на .product и
    // сохраните в переменную:
    // const cardNode = ;
    let cardNode = clickedButtonEvent.target.parentNode;

    // 3. создайте литерал объекта со следующими свойствами:
    const card = {
        wrap: cardNode,
        img: cardNode.querySelector('img'),
        productName: cardNode.querySelector('.productName'),
        button: cardNode.querySelector('button'),
    };

    // 4. получаем текст на кнопке, которая внутри .product
    
    
    let text = card.button.innerText;
    if (text=== 'Подробнее') {
        showMoreText(card);
    } else if (text === 'Отмена') {
        hideMoreText(card);
    }
}

/**
 * Функция скрывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button
 */

    function hideMoreText(card) {
        card.img.style.display = 'block';
        card.wrap.querySelector('.desc').remove();
        card.button.innerText = 'Подробнее';
    }

/**
 * Функция показывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button 
 */
 function showMoreText(card) {
    card.img.style.display = 'none';
    const text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.';
    card.productName.insertAdjacentHTML('afterend', `<div class="desc">${text}</div>`);
    card.button.innerText = 'Отмена';
}