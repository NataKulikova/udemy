const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll(".heart");
const oneHart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');

console.dir(box) // посмотрели свойства в браузере

box.style.backgroundColor = 'blue'; //хотим поменять свойство (инлайн стили, они самые приоритетные, не важно что написано в css, инлайн стили перебивают остальные)
btns[1].style.borderRadius = '100%'; // делаем кнопку овальной. 
oneHart.style.backgroundColor = 'black';
hearts[2].style.backgroundColor = 'black';
circles[0].style.backgroundColor = 'red'

box.style.cssText = 'background-color: red; width: 500px';//прописываем несколько свойств сразу через метод cssText

//задаем свойства через цикл for:
for(let i = 0;i<hearts.length;i++){
    hearts[i].style.backgroundColor='blue'
}
//задаем свойства через цикл forEach:
hearts.forEach(item => {
    item.style.backgroundColor = "blue";
})


const div = document.createElement('div');//создали новый тэг div, кот сущ только внутри js скрипта, в документе его нет
//const text = document.createTextNode('тут был я'); 

div.classList.add('black');//добавили к эелементу div стилизацию black - это CSS класс который у нас уже есть. это существует тоже только внутри js, на странице его нет

//document.body.append(div);//добавляем в тэг body наш div в самый конец страницы!только в этот момент наш div появится на странице!
//document.querySelector('.wrapper').append(div); // добавляем div  в структуру wrapper html

wrapper.append(div)//вставляет в конец родителя элемент 
//wrapper.prepend(div);//prepend - это метод кот вставляет в начало родителя элемент 

//hearts[0].before(div); // аналогичные методы prepend/append
//hearts[0].after(div);

//circles[0].remove();

//hearts[0].replaceWith(circles[0])//заменили heart на circle

//-Устаревшие методы (все команды идут через родителя)
//wrapper.appendChild(div)
//wrapper.insertBefore(div,hearts[2]) // div - сам блок div, перед чем вставляем 
//wrapper.removeChild(hearts[1])
//wrapper.replaceChild(circles[0], hearts[0]) //заменили heart на circle
//-------

div.innerHTML = "<h1>Hello Div</h1>"// с помощью такого метода можем формировать структуру сайта 

//div.textContent = 'YO!'//помещаем текст, обычно эти данные получаем от пользователя поэтому можно только строку вставлять а не HTML

//div.insertAdjacentHTML("beforebegin","<h2>Heyy Adj</h2>") //вставляет html код (hey) перед элементом

//div.insertAdjacentHTML("afterbegin","<h2>Heyy Adj</h2>")//вставляет html код (hey) после элемента

//div.insertAdjacentHTML("beforeend","<h2>Heyy Adj</h2>")//вставляет html код (hey)  перед концом элемента

div.insertAdjacentHTML("afterend","<h2>Heyy Adj</h2>")//вставляет html код (hey)  перед концом элемента




