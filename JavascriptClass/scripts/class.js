 /*// for loop     
 for (let i = 0; i < 10 ; i++){
    console.log(i);
 }

*/

/*
 // for loop in

 let person = {
    name: 'kate Ingwu',
    age: '100years old',
    job:'frontend developer',
    city:'Jos'

 }
 for ( let item in person){
    console.log(item + ":" + person[item]);
 }
*/
 // do while loop

/*
 let num = 0

 do {
    num++;
    console.log(num);
 }while(num < 10);
 
 */

//  while loop
 // this execute the condition,only then code inside the loop execute
/*
 let num = 0;
 while(num < 10){
   num++;
    console.log(num);
    
    
 }
 */
/*
 //break loop
// example 1
 let num = 0;
 for ( let i = 0; i < 20; i++){
   if (i === 10){
      continue;
   }
   num++
 }
 console.log(num);
 */


 /*
//  switch statement

// each case in switch statement checks if
let i = 10;
switch (i) {
   case 10:
      alert("10");
      break;
   case 10: 
   alert("10");
   break;
   case 10:
      alert("10");
      break;
      default:
         alert('Nothing found')
}
// */
// let i = 10;
// switch (i) {
//    case 10:
//       console.log(10);
//       break;
//    case 2: 
//    console.log(10);
//    break;
//    case 3:
//    console.log(10);
//       break;
//       default:
//          console.log('Nothing found');
//        //  use to compute results  and other day-to-day problems in real life application
// }


// //Array

// //toString method

// const color = ['pink', 'blue', 'yello', 'purple']
// console.log(color.join(' - '))

//stack method last in first
// //push -- is to add

// const color = ['pink', 'blue', 'yello', 'purple']
// color.push('kate')
// console.log(color)


// //pop method is to remove an array
// const color = []
// color.push ('pink', 'blue', 'yello', 'purple')
// const removeColor = color.pop()
// console.log(color, removeColor)

//queue method remove i. first in first out
//unshift() add in front of the array

// const color = ['pink', 'blue', 'yello', 'purple']
// color.unshift('plan' , 'kate' , 29, 11)
// console.log(color)

// //unshift()  is to remove the first item of the array

// const color = ['pink', 'blue', 'yello', 'purple']
// color.shift()

// color.unshift('plan' , 'kate' , 29, 11)

// color.shift()
// console.log(color)

// //Reordering method
// //reverse()///

// const color = ['pink', 'blue', 'yello', 'purple']
// console.log(color.reverse())
// const value = [1,2,3,4,5,6,7,8,9]
// // console.log(value.reverse())

// //sort() method
// //it convert it to string
// const value = [10,2,30,4,1,15,5,6,7,8,9]
// // console.log(value.sort())

// const color = ['pink', 'blue', 'yello', 'purple']
// console.log(color.sort())


// //compare () //
// const value = [10,2,30,4,1,15,5,6,7,8,9]
// console.log(color.sort(compare))
// function compare(val1, val2) {
//    return val1 - val2
// }


//manipulation methods
//concat()

// const color = ['pink', 'blue', 'yello', 'purple']
// const totalcolor = color.concat(['black', 'white'])
// console.log('org:',color, totalcolor)

//Object//
//Object literials{}

// let user = {
//    name: "linto",
//    Age: 30,
//    email: "catherineingwu@gmail.com",
//    Location: "Jos",
//    blogs: ["light life in jos withot Javascript","Tech life snack"]
// };
// console.log(user);

// // . notation
// console.log(user.age),
// user.age = 50;
// user.name ="kate"
// console.log(user.age)
// console.log(user.name)

// //[] notation

// console.log(user['email']);
// user['name'] = "plang";
// user["age"] = 10;
// // console.log(typrof us);
// console.log(user['name'])

// //add method

// let user = {
//    name: "linto",
//    Age: 30,
//    email: "catherineingwu@gmail.com",
//    Location: "Jos",
//    blogs: ["light life in jos withot Javascript","Tech life snack"],
//    login: function(){
//       console.log('the user is login'); 
//    },
//    logout: function(){
//       console.log("the user is login")
//    }

// };

// user.login();
// user.logout()


//this methods//////

// // console.log(this)

// let user = {
//    name: "linto",
//    Age: 30,
//    email: "catherineingwu@gmail.com",
//    Location: "Jos",
//    blogs: ["light life in jos withot Javascript","Tech life snack"],
//    login: function(){
//       console.log('the user is login'); 
//    },
//    logout: function(){
//       console.log("the user is login")
//    },
//    logblogs : function(){
//       console.log(this.logBlogs);
//       console.log('this user has written the following blogs');
//       this.blogs.forEach(blogs =>{
// console.log(blogs)
//       })
      
//    }

// };
/// /// when we called a method this js seta value of
// this keywords to be the object, method was use on


//user.logblogs();


// //Array of object//
// let blogs = [
//    {tittle: 'night life in jos without js',
//     like:30
//    },

//    {
//   tittle: 'night life', 
//    like:200
// },

// ];


// let user = {
//    name: "linto",
//    Age: 30,
//    email: "catherineingwu@gmail.com",
//    Location: "Jos",
//    blogs:[
//       {tittle: 'night life in jos without js',
//        like:30
//       },
   
//       {
//      tittle: 'night life', 
//       like:200
//    },
   
//    ],
//    login: function(){
//       console.log('the user is login'); 
//    },
//    logout: function(){
//       console.log("the user is login")
//    },
//    logblogs : function(){
//       console.log(this.logBlogs);
//       console.log('this user has written the following blogs');
//       this.blogs.forEach(blogs =>{
// console.log(blogs)
//       })
      
//    }

// // };

// // user.logblogs();



// //math object  build in//
// console.log(Math)
// console.log(Math.PI)
// console.log(Math.E)



// const king = 7.9
// console.log(Math.round(king))
// console.log(Math.floor(king))
// console.log(Math.ceil(kind))
// console.log(Math.trunc(king))
// console.log(Math.log(king))

// const random = Math.random()
// console.log(random(random))
// console.log(Math.random(random))
// console.log(Math.random(random * 100))



//Primitive and refrences//
//premitive is stored in stack e.g function, arrays etc
//and refrences this is stored in heap

let scoreone = "kate";
let scoretwo = 20;
console.log(`scoreone:${scoreone}`, `scoretwo:${scoretwo}`);
console.log(`my name is ${scoreone}`, `has a series score:${scoretwo}`);


//refrence////////
let userone = {name: "kate", age: 100}
let usertwo = userone;
console.log(userone, usertwo)

 userone = 50
 console.log(userone, usertwo)
















