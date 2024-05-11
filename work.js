//http://mmstar.ru/wp-content/uploads/2020/11/Lab_6.pdf

//-Циклы
// Выведите столбец чисел от 1 до 50.

// for (let i = 1; i <= 50; i++) {
//     console.log(i);
// }

// let i = 1
// while (i<=50){
//     console.log(i);
//     i++
// }

//-Строки

// Задача. Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены.

// let str = 'aaa@bbb@ccc'
// let result = str.replace('@','!')
// console.log(result)

// let str = 'aaa@bbb@ccc'
// let result = str.replace(/@/g,'!')
// console.log(result)

//a=someString.replaceAll(' ','') это убрать все пробелы из строки

//Задача. Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).

// let str = 'aaa bbb ccc'
// let result = str.substr(4,3)
// console.log(result)

// let result2 = str.substring(4,7)
// console.log(result2)

// let result3 = str.slice(4,7)
// console.log(result3)

// let str2 = '012345678'
// let result4 = str2.trimStart() 
// console.log(result4)

// result5=str2.indexOf('5')
// console.log(result5)

//-Числа

// let a=0.5
// b=Math.round(a)
// console.log(b)

// let a='1.5u'
// b=parseInt(a)
// console.log(b)

//-Массивы
// Дан массив с элементами []. С помощью цикла for выведите все эти элементы на экран.

// const arr=[6, 2, 7, 4, 0]

// for (let i=0; i<arr.length;i++){
//    console.log(arr[i])
// }

//Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение элементов этого массива

// let result=1
// let arr=[2, 3, 4]

// for (let i=0; i<arr.length;i++){
//    result*=arr[i];
// }

// console.log(result)


//В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'.

//просто в качестве тренировки реплейса
// let date = '2025-12-31'
// console.log(date.replace(/-/g,'/'))


// let date = '2025-12-31'
// let array = date.split('-')
// let arrayRev=array.reverse()
// let arrayNew=arrayRev.join('/')
// console.log(arrayNew)

// let array = [100,77,10007,2,155]
// console.log(array.sort())

// function g(a,b){
//     return a-b
// }
// array.sort(g);
// console.log(array)

////перебор массива

let arr = [-2, 5, 1, -5, -1, 1, 3, 4, -1];

////метод filter
// let res = arr.filter(function(i){
//     if(i%2===0){
//         return true;
//     } else {
//         return false;
//     }
// });

// console.log(res)

//метод filter
// arr.filter(function(i){
//     if(i<0){
//     console.log(i)
//     }
// });

// тоже самое, но через функцию
// function filtr(array){
//     array.filter(function(i){
//         if(i<0){
//             console.log(i)
//         }
//     })
// }

// console.log(filtr(arr))

////filter через стрелочную функцию
// let res = arr.filter(i=>i<0);
// console.log(res)

// let chet = arr.filter(i=>i%2===0);
// console.log(chet)

// function chet(array) {array.filter(i=>i<0);
//     return array
// }

// console.log(chet(arr))

////for of
// for(let i of arr){
//     if (i<0){
//         console.log(i)
//     }
// }

////for each
// arr.forEach(function(i){
//     if (i<0){
//         console.log(i)
//     }
// })

//-Объекты

/*Задача. Дан объект obj с ключами 'Минск', 'Москва', 'Киев' с элементами 'Беларусь',
'Россия', 'Украина'. С помощью цикла for-in выведите на экран строки такого
формата: 'Минск - это Беларусь.'.*/

// const obj = {
//     'Минск': 'Беларусь',
//     'Москва': 'Россия',
//     'Киев': 'Украина'
//     };

// for(let key in obj){
//     console.log(`${key} - это ${obj[key]}`)
// }


function showFamily(arr) {
    let str='';
arr.length === 0 ? str = "сем пуста" : str = "сем сост из ";
arr.forEach(member =>{
    str +=`${member} `
});
return str;
}

console.log(showFamily(family))