const btns = document.querySelectorAll('button'),
     wrapper = document.querySelector('.btn-block')
//console.log(btns[0].classList.length); //узнаем сколько классов у кнопки 
//console.log(btns[0].classList.item(0))// получаем класс под нулевым индексом
// console.log(btns[0].classList.add('red')) // добавили класс (он заранее был  прописан в вайле css)
// console.log(btns[0].classList.remove('red')) // удалили класс. но он работает только с первым элементом, также как и add
// console.log(btns[0].classList.toggle('red')) // Если класс "red" присутствует в списке классов, то он будет удалён, а иначе наоборот добавлен

// if(btns[1].classList.contains('red')) {
//     console.log('red')
// } // если в списке есть класс red то выводит true

btns[0].addEventListener('click', () => {  // при клике по первой кнопке запускаем логику ниже
    // if (!btns[1].classList.contains('red')){ // у второй кнопки нету класса red?
    //     btns[1].classList.add('red'); // если нет то добавляем его
    // }else{
    //     btns[1].classList.remove('red') //если есть то удаляем
    // }

    btns[1].classList.toggle('red') // а это альтеративный локоничный способ. тогл делает тоже самое
});

//устаревшее classname - выводит строчку, и поэтому нужны дальнейшие преобразования для работы
//console.log(typeof(btns[0].className))

//-- Делегирование событий
//делегируем событие с родителя на его потомков. 
//в примере ниже при клике на родителя(на серую область - переменная wrapper) событие не происходит
//а при клике на потомков - выводится heu

// wrapper.addEventListener('click', (e) => {
//     //console.dir(e.target)//получим всю информацию об объекте по клику на него
//     if(e.target && e.target.tagName == 'BUTTON')// e.target прописываем как первое условие так как не все элементы поддерживают событие клика(например тэг br), поэтому удостоверяемся что он точно есть 
//     console.log('heu')
// });

//Вместо делегирования назначим событие путем перебора
//и при клике на новосозданную кнопку help уже не будет выводиться!!
//ну и на серую область понятно тоже не будет вывода, так как мы перебираем потомков
// btns.forEach(btn => {
//         btn.addEventListener('click', () => {
//             console.log('Hellllllpppp')
//         })
// })

//попробуем метод matches. он проверяет что какой-то эл-т совпадает с чем-то
//тут при нажатии на новый элемент событие сработает, и к тому же после динамиского события сменя класса на red событие тоже будет работать
wrapper.addEventListener('click', (e) => {
    //console.dir(e.target)//получим всю информацию об объекте по клику на него
    if(e.target && e.target.matches('button.red'))// e.target прописываем как первое условие так как не все элементы поддерживают событие клика(например тэг br), поэтому удостоверяемся что он точно есть 
    console.log('heu')
});


const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn); //append добавит btn  во враппер так как до этого момента класс существует только в js скрипте а не на странице
//при клике на новосозданную красную кнопку heu снова появится,даже если она создана после делегирования
