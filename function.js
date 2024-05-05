// //console.log('kya hal');
// //function definition
// //javascript engine do hoisting -> the process of moving function declaration top of the file
// run();// calling above the function definition
// function run(){
//     console.log('running');
// }
// //invoke or call
// run();//calling below the function definition

// //Named function assignment
// //stand();//does not work hoisting for function assignment
// let stand = function walk(){
//     console.log('walking');
// }
// //calling
// stand();
// //walk();//error not defined

// let jump = stand;
// jump();

// //Anonymous function assignment
// let stand2 = function(){
//     console.log('walking');
// }
// stand2();
// //function are dynamic in nature
// // function sum(a,b){
// //     console.log(arguments);
// //     return a+b;
// // }
// // console.log(sum(1,2));// 3
// // console.log(sum(1));//NaN
// // console.log(sum());//NaN
// // console.log(sum(1,2,3,4,5));//3
// //special object in js -> arguments
// // function sum(){
// //     let total = 0;
// //     for(let value of arguments)
// //         total = total+value;
// //     return total;
// // }
// // let ans = sum(1,2,5);
// // console.log(ans);

// //Rest operator->stores in the form array
// // function sum(...args){
// //     console.log(args);
// // }
// // sum(1,2,3,4,5);
// // function sum(num,...args){
// //     console.log(args);
// // }
// // sum(1,2,3,4,5);
// // //after rest no parameter allowed
// // function sum(num,...args,val){
// //     console.log(args);
// // }
// // sum(1,2,3,4,5);

// //Default parameters
// function interest(p,r,y=1){
//     return p*r*y/100;
// }
// console.log(interest(100,4,2));

//Getter setter
// let person = {
//     first_name:'shiv',
//     last_name:'singh',
//     get function(){
//        return `${person.first_name} ${person.last_name}`;
//     },
//     set function(value){
//         if(typeof value != String){
//             throw new Error('galat hai');
//         }
//         let parts = value.split(' ');
//         this.first_name=parts[0];
//         this.last_name = parts[1];
//     }
// };
// try{
//     person.function = 1;
// }
// catch(e){
//     alert(e);
// }
// console.log(person.function);

//scope
// {
//     let a = 5;
//     console.log(a);
// }
// console.log(a);
// {
//     var a = 5;
//     console.log(a);
// }
// console.log(a);

// function walk(){
//     var a = 5;
// }
// console.log(a);

//Reducing an array
let arr = [1,2,3,4];
// let total = 0;
// for(let val of arr)
//     total = total+val;
// console.log(total);

let sum = arr.reduce((accumulator,intitalvalue)=>accumulator+intitalvalue,0);
console.log(sum);


