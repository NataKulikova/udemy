// const numbers = {
//     a:2,
//     b:5,
//     c:{
//         x:7,
//         y:4
//     }
// }

// function copy(mainObj){
//     let objCopy = {}

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy
// }


// const newNumbers = copy(numbers);
// newNumbers.a=10;
// console.log(newNumbers);
// console.log(numbers);

// console.log(numbers['1'])

function foo(a,b) {
    const [g,o] = a;
    const {eng} = b;
 
    return `${g} ${eng}`;
}
 
const result = foo(['h','Hello', 'Привет'], {ru: 'Мир', nj: 'World'})

console.log(result)


const auto = {
    brand: 'Tesla',
    color: 'green',
  };
//   const PerBrand = auto.brand;
//   const PerColor = auto.color;

  //Используя деструктуризацию, мы можем то же самое записать в одну строчку:
  
  const { PerBrand, PerColor } = auto;

  console.log(PerBrand)
  console.log(PerColor)


//   Здесь мы используем фигурные скобки, чтобы перечислить названия свойств объекта auto, значения которых мы хотим присвоить новым переменным brand и color.\


// Что будет содержаться в переменной result после завершения кода?
function foo(a,b,d) {
    const [first] = a;
    const {eng} = b;
    const {poo} = d;
 
    return `${first}${eng}`;
}
 
const result = foo(["1","2"],{ru: 'Мир', eng: 'World'})
console.log(result)

// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };

// let {color}=options

// console.log(color)

