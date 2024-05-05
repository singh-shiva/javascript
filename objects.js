console.log('chaliye suru karte hai');

//object create

// const rectangle={
//     length:1,
//     breadth:2,

//     draw: function(){
//         console.log('drawing rectangle');
//     }
// };

// Factory Function


// function createRectangle(){
//     return  rectangle={
//         length:1,
//         breadth:2,
    
//         draw: function(){
//             console.log('drawing rectangle');
//         }
//     };


// function createRectangle(length,breadth){
//     return  rectangle={
//         length:length,
//         breadth:breadth,
    
//         draw: function(){
//             console.log('drawing rectangle');
//         }
//     };
// }
// function createRectangle(length,breadth){
//     return  rectangle={
//         length,
//         breadth,
    
//         draw: function(){
//             console.log('drawing rectangle');
//         }
//     };
// }
// function createRectangle(len,bre){
//     return  rectangle={
//         length:len,
//         breadth:bre,
    
//         draw: function(){
//             console.log('drawing rectangle');
//         }
//     };
// }
// let rectangleObj1 = createRectangle(4,5);
// const rectangle1={
//     length:1,
//     breadth:2,

//     draw: function(){
//         console.log('drawing rectangle');
//     }
// };
// const rectangle2={
//     length:1,
//     breadth:2,

//     draw: function(){
//         console.log('drawing rectangle');
//     }
// };

//Camelcase -> numberOfStudents
//Constructor function -> Pascal Notation -> first letter of every word is capital -> NumberOfStudents
// function Rectangle(){
//     this.length = 1;
//     this.breadth = 2;
//     this.draw = function(){
//         console.log('drawing');
//     }
// }
// //object creation using constructor function
// let rectangleObject = new Rectangle();
// rectangleObject.color = 'yellow';
// console.log(rectangleObject);
// delete rectangleObject.color;
// console.log(rectangleObject);

// let Rectangle1 = new Function(
//     'length','breadth'

// )

// let rectangle = {
//     length:2,
//     breadth:4
// };

//for in loop

// for(let key in rectangle){
//     console.log(key,rectangle[key]);
// }

//for of loop
// for(let key of Object.keys(rectangle)){
//     console.log(key);
// }
// for(let key of Object.entries(rectangle)){
//     console.log(key);
// }

// if('color' in rectangle){
//     console.log('Present');
// }
// else{
//     console.log('Absent');
// }
// let src = {
//     a:10,
//     b:20,
//     c:30
// };
// let dest = {};
// for(let key in src ){
//     dest[key] = src[key];
// }
// console.log(dest);
// src.a++;
// console.log(dest);

// let src = {
//     a:10,
//     b:20,
//     c:30
// };
// let src2 = {
//     value:25
// };
// let dest = Object.assign({},src,src2);
// console.log(dest);

// let src = {
//     a:10,
//     b:20,
//     c:30
// };
// let dest = {...src};
// console.log(dest);
// src.a++;
// console.log(dest);

// let firstName = 'Shiv';
// let lastName = new String('Singh');

// let message = `This is ${firstName} going to be an
//  extra ordinary thing in 
//  thid world of cricket`;
// console.log(message);

// let date = new Date();
// console.log(date);
// let date2 = new Date('June 20 1998 07:15');
// console.log(date2);
// let date3 = new Date(1998, 5, 20 ,7);
// console.log(date3);
// date3.setFullYear(1999);
// console.log(date3);
// date3.setMonth(3);
// console.log(date3);

// let numbers = [1,3,5,7];
// console.log(numbers);
// numbers.push(9);
// console.log(numbers);
// numbers.unshift(8);
// console.log(numbers);
// numbers.splice(2,0,'a','b','c','d');
// console.log(numbers);

// console.log(numbers.indexOf(7));
// //we want to check if a number exists in an array
// if(numbers.indexOf(5) != -1)
//    console.log('present');

// console.log(numbers.includes(8));
// console.log(numbers.indexOf(4,2));

//array of objects
// let courses = [
//     {no:1,naam:'shiv'},
//     {no:2,naam:'singh'}
// ];
// console.log(courses);
// console.log(courses.indexOf({no:1,naam:'shiv'}));
// //callback function
// let course = courses.find(function(course){
//     return course.naam == 'shiv';

// })
// console.log(course);

// let numbers2 = [1,2,3,4,5,6,7];

// numbers2.pop();
// numbers2.shift();
// numbers2.shift();
// console.log(numbers2);
// numbers2.splice(2,1);
// console.log(numbers2);

// let first = [1,2,3];
// let second = [3,4,5];
// // let combine = first.concat(second);
// // console.log(combine);
// // let sliced = combine.slice(2,3);
// // console.log(sliced);
// let combined1 = [...first,...second];
// console.log(combined1);
// let combined2 = [...first,'a',...second,'b'];
// console.log(combined2);

// //copy kaise create karu
// let another = [...combined2];

// let arr = [10,20,30,40,50];
// for(let value of arr){
//     console.log(value);
// }

// arr.forEach(function(number){
//     console.log(number);
// })
// //arrow function
// arr.forEach(number=>console.log(number));

//joining arrays
let number = [10,20,30,40,50];
const joined = number.join(',');
console.log(joined);

let message = 'This is my first message';
let parts = message.split(' ');
console.log(parts);

// let joined1 = parts.join('_');
// console.log(joined1);

// let numbers = [40,10,60,20,30];
// numbers.sort();
// console.log(numbers);
// numbers.reverse();
// console.log(numbers);

// let number2 = [-1,4,-3,5,3,1];
// let filtered = number2.filter(function(value){
//     return value>=0;
// });
// console.log(filtered);

// //arrow function
// let filtered1 = number2.filter(value=>value>=0);
// console.log(filtered1);

// let number3 = [7,8,9,10];
// let items = number3.map(function(value){
//     return 'student_no.' + value;
// })
// console.log(items);
