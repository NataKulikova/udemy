// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(array){
    let str='';
    array.length === 0 ? str = 'семья пуста' : str = 'семья состоит из ';
    for (let i=0; i<array.length; i++){
      str+=`${array[i]} `
    }
    return str;
}

console.log(showFamily(family))


let a = ["a", "b", "c"];

function forc(arr){
let index;
for (index = 0; index < arr.length; ++index) {
    console.log(arr[index]);
}
}
forc(a)



// 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.
// Пример:
// standardizeStrings(favoriteCities)  выведет в консоль
// lisbon
// rome
// milan
// dublin
// Это частая задача в реальности, так как от пользователя нам могут прийти ответы в самых разных форматах. В том числе и с разными буквами :) Поэтому нам нужно привести строки в один формат для правильной работы.

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(city) {
    city.forEach(i=>{
    console.log(i.toLowerCase())
})
}

standardizeStrings(favoriteCities)


// 3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.
// Пример:
// const someString = 'This is some strange string';
// reverse(someString) => 'gnirts egnarts emos si sihT'
// Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"

// const someString = 'This is some strange string'

// function reverse(arr){
//     if (typeof(arr)!=='string'){
//         return 'ошибка!';
//     }
//    return arr.split('').reverse().join('')
// }

// console.log(reverse(someString))

const someString = 'This is some strange string'

function reverse(arr){
        if (typeof(arr)!=='string'){
        return 'ошибка!';
        }
    let newStr=''
    for(let i=arr.length-1;i>=0;i--){
        newStr += arr[i]
    }
    return newStr
}

console.log(reverse(someString))

// newStr - агрегатор, поэтому перед равно стоит +
// Оператор: x += y
// Значение: x  = x + y
// i-- это декремент, т.е. шаг равен -1, тк мы считаем с конца и приходим к первой букве

// 4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:
// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.
// Пример:
// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
// Вернет строку:
// Доступные валюты:
// UAH
// RUB
// Заметьте:
// - CNY (юань) исчез из списка валют, значит такая валюта закончилась
// - После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов
// - Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(av, mis){
        let str='';
        av.length === 0 ? str='нет доступных валют' : str = 'доступные валюты:\n';
        av.forEach(function(cur,i){
            if (cur !== mis){
                str+=`${av[i]}\n`;
        }
        });
        // for(let i=0; i<av.length; i++ ){
        //     if (av[i]===mis){
        //         continue;
        //     }
        //     str+=`${av[i]}\n`;
        // }
    return str;
}
console.log(availableCurr([...baseCurrencies,...additionalCurrencies],'UAH'))

//?зачем два аргемента в forEach...? почему не работает с одним?