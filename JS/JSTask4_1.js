"use strict"
// 1.1 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6
// (по аналогии из дополнительных видео -> 3 примеры наследования -> типы на es5 и es6),
// конструктор Product, который принимает параметры name и price, сохраните их как
// свойства объекта. Также объекты типа Product должны иметь метод make25PercentDiscount,
// который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод make25PercentDiscount
// не должен быть внутри функции-конструктора, и также не нужно создавать отдельный объект-прототип
// (как объект transport в уроке).
// es5
function Product(name,price){
    this.name = name;
    this.price = price;
}
Product.prototype.make25PercentDiscount = function(){
    console.log(this.name,this.price = this.price-(this.price*0.25));
};
let obj1 = new Product('orange','100');
obj1.make25PercentDiscount();
let obj2 = new Product('mellon','1000');
obj2.make25PercentDiscount();


//es6
class Product2{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount2(){
        this.price = this.price-(this.price*0.25);
        alert(this.name +' '+this.price);

    }
}
let obj3 = new Product2('orange','100');
obj3.make25PercentDiscount2();
let obj4 = new Product2('mellon','1000');
obj4.make25PercentDiscount2();