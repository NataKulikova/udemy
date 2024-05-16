//возведение в степень


function pow(x, n){
    let result = 1;
    for (let i=0; i<n; i++){
        result *=x;
        //result = x*result аккумулятор
    }
    return result;
}

function pow(x, n){
    if(n ==== 1) {
        return x;
    } else {
        return x*pow(x, n-1);
    }
}


pow(2,1)//1
pow(2,2)//4
pow(2,3)//8
pow(2,4)//16

let students = {
    js: [{
        name: 'John',
        progress:100
    },{
        name: 'Ivan',
        progress:60       
    }],

    html:{
        basic:[{
            name:"Peter",
            progress:20        
        },{
            name:"Ann",
            progress:18          
        }],

        pro: [{
            name:"Sam",
            progress:10         
        }]
    }
};

//задача посчитать средний прогресс всех студентов: берем сумму всего прогресса и разделить на кол-во всех студентов

function getTotalProgressByIteration(data){
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)){//опускаем значения js, html и работаем с их внутренностями - [] от js и {} от html
        if(Array.isArray(course)){  //если попали на массив - считаем студентов и значения прогресс
            students +=course.length;

            for(let i=0;i<course.length;i++){
                total+=course[i].progress; 
            }
        } else { //попали на объект html, поэтому аналогично опускаем свойства pro, basic и идем внутрь
            for (let subCourse of Object.values(course)){ //попадаем стопроц на массив html поэтому не проверяем isArray и выполняем те же операции
            students +=subCourse.length;

            for(let i=0;i<subCourse.length;i++){
                total+=subCourse[i].progress;
        }
    }
}
}
    return total/students;
    }

console.log(getTotalProgressByIteration(students)) 

//если добавится еще один объект с вложенным объектом то вышенаписанный код уже не сработает автоматически, придется повторять один и тот же код
//поэтому используем рекурсию


function getTotalProgressByRecursion(data){
    if(Array.isArray(data)){  //если попали на массив - считаем студентов и значения прогресс
        let total = 0;

        for(let i=0;i<data.length;i++){
            total+=data[i].progress; 
        }

        return [total, data.length];
    } else {
        let total = [0,0];
        for (let subData of Object.values(data)){
        const subDataArr = getTotalProgressByRecursion(subData);//это рекурсия - функция будет перебирать внутр. структуры
        total[0]+=subDataArr[0];
        total[1]+=subDataArr[1];
    }
    return total;
}
}

const result = getTotalProgressByRecursion(students)
console.log(result[0]/result[1])

//поменяем условия(добавим объект semi):
let students = {
    js: [{
        name: 'John',
        progress:100
    },{
        name: 'Ivan',
        progress:60       
    }],

    html:{
        basic:[{
            name:"Peter",
            progress:20        
        },{
            name:"Ann",
            progress:18          
        }],

        pro: [{
            name:"Sam",
            progress:10         
        }],

        semi:{
            students:[{
                name:"Test",
                progress:100                
            }]
        }
    }
};

// вариант с циклом не сработает, а с рекурсией сработает автоматически, с любой вложенностью

function getTotalProgressByRecursion(data){
    if(Array.isArray(data)){  //если попали на массив - считаем студентов и значения прогресс
        let total = 0;

        for(let i=0;i<data.length;i++){
            total+=data[i].progress; 
        }

        return [total, data.length]; // т.к. нам нужно 2 значения - сумма и кол-во то возвращаем 2 значения
    } else { //если попали не в массив
        let total = [0,0];
        for (let subData of Object.values(data)){
        const subDataArr = getTotalProgressByRecursion(subData);//это рекурсия - функция будет перебирать внутр. структуры
        total[0]+=subDataArr[0];
        total[1]+=subDataArr[1];
    }
    return total;
}
}

const result = getTotalProgressByRecursion(students)
console.log(result[0]/result[1])