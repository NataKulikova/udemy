// let numberOfFilms;

// function start(){
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
//     while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
// str.length - и получить её длину)

// function rememberMyFilms(){
//     for(let i=0; i<2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?'),
//             b = prompt('На сколько оцениваете его?');
//         personalMovieDB.movies[a] = b;
//         if (a!=null && b!=null && a!="" && b!='' && a.length<50) {
//             personalMovieDB.movies[a] = b;
//             console.log('ok')
//         } else {
//             console.log('error')
//             i--;
//         }
//     }
// }
// rememberMyFilms();

/*3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"*/

// function detectPersonalLevel(){
//     if (personalMovieDB.count < 10) {
//         console.log('Просмотрено довольно мало фильмов');
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('Вы классический зритель');
//         } else if (personalMovieDB.count >= 30) {
//             console.log('Вы киноман');
//         }else {
//                 console.log('Произошла ошибка');
//             }
// }

// detectPersonalLevel()

/*!29! 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы*/

// let numberOfFilms;

// function start(){
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
//     while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
//     }
// }

// start();

//вариант без арегументов//
const personalMovieDB = {
    //count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// function showMyDB(){
//   personalMovieDB.privat == false ? console.log(personalMovieDB):console.log('privat');
// }
// showMyDB()

// вариант с аргументом//

// function showMyDB(hidden){
//     if(!hidden){
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.privat)

/*3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

//с аргументом//
// let genre
// function writeYourGenres(genre){
//     for(let i=1; i<=3; i++){
//         genre=prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovieDB.genres[i]=genre
//     }
// }
// writeYourGenres(genre)
// console.log(personalMovieDB.genres)

//без аргумента//
function writeYourGenres(){
    for(let i=1; i<=3; i++){
        const genre=prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i-1]=genre
    }
}
writeYourGenres();
console.log(personalMovieDB)