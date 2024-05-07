const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
let i=0
while (i<2) {
    const a = prompt('Один из последних просмотренных фильмов?'),
        b = prompt('На сколько оцениваете его?');
    personalMovieDB.movies[a] = b;
    i++
}
console.log(personalMovieDB);

// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
// str.length - и получить её длину)

let i=0
while(i<2) {
    const a = prompt('Один из последних просмотренных фильмов?'),
        b = prompt('На сколько оцениваете его?');
    personalMovieDB.movies[a] = b;
        i++
    if (a!=null && b!=null && a!="" && b!='' && a.length<50) {
        personalMovieDB.movies[a] = b;
        console.log('ok')
    } else {
        console.log('error')
        i--;
    }
}
