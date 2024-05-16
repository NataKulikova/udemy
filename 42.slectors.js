'use strict';
const box = document.getElementById('box')
console.log(box)

const btns = document.getElementsByTagName('button') // получили не один элемент а псевдомассив (HTML collection)! псевдомассивы - это те же массивы, но которые не имеют методов массивов (pop push...)
console.log(btns)

const btns1 = document.getElementsByTagName('button')[1] // получили вторую кнопку из псевдомассива
console.log(btns1)

console.log(btns[4]) // так получаем конкретную кнопку другим способом
//даже если у нас одна кнопка обращаться надо [0] тк это html коллекция пусть и с одним элементом

const circles = document.getElementsByClassName('circle') // обращение к классу, снова получение HTML collection
console.log(circles) // обращаться к конкретному элементу можно также через индекс []

const hearts = document.querySelectorAll(".heart");//  в скобках любой CSS селектор(класс/атрибуты/...) у querySelectorAll есть метод ForEach
console.log(hearts)

hearts.forEach(item =>{
    console.log(item)
})

const oneHart = document.querySelector('.heart')//первый попавийся элемент класса
console.log(oneHart)