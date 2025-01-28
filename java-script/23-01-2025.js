
console.log('hello');

// type conversion => implicit
// to string
/* let a = "100";
   let b = 10;

   let c = a + b;
   console.log(c);
*/

/* let a = 100
   let b = false;

   let c = a + b;
   console.log(c);
*/

// convert to number
/* let a = '100'
let b = 50;

// c = a/b;
//    c= a*b
console.log(c)
console.log(typeof(c))
*/


// Explicit conversion

// let a = 100;
// let a = false;
// let a = null;
// let a = 100
// let a = 'heyy'
// console.log(typeof(a))
// console.log(a)
// console.log(typeof String(a))
// console.log(typeof Boolean(a))

// alert('hello');

// prompt('write something')

// let age = prompt('how old are yor', 100)
// alert(`you are ${age} year old`)

// let isBoss = confirm ('Are you the boss?');


// Operator
// arithmatic operator

//   let a = 10;
//   let c = a++;
//   let b =4;

//   console.log(`addition ${a+b}`)
//   console.log(`subtraction ${a-b}`)
//   console.log(`mul ${a*b}`)
//   console.log(`div ${a/b}`)
//   console.log(`moduls ${a%b}`)
//   console.log(`increment ${++a}`)
//   console.log(a)
//   console.log(c)
//   console.log(`decr ${b--}`)


// comparison operator
// let a = 110;
// let b = 20;

// console.log(a==b);
// console.log(a>b);
// console.log(a<b);
// console.log(a!=b);
// console.log(a<=b);
// console.log(a>=b)

// assignment operator

/* let a = 10;
a += 5;
let b = 20;

b *= 2;

console.log(a);
console.log(b);
*/

let c = 10
// c = 10+2
c += 2;
console.log(c)

let d = 10;
// d = 10 -8;
// d -= 8;
console.log(d)
d **= 2;
console.log(d)


// logical operator
/*  let num = 10;
   let num1 = 20;

   let str = 'abc'
   let str1 = 'lalsd'
   let str2 = 'lald'


   console.log((str=str1) && (str1=str2))
   console.log(num && num1)
*/


// let val = 10;
// let val1 = 20;

// let result = val < val1 ? 'val is less-then' : 'val1 is grater';
// console.log(result) 


// let a = 'abcdef';
// console.log(typeof(a))

// let  nl = null;
// console.log(typeof(nl))

// let  value = NaN ;
// console.log(typeof(value))


let a = undefined;
let b = 10;

console.log(a ?? b);

// Delete Operator
// let obj = {
//     name : 'lask',
//     num : 20
// };

// delete obj.name;
// console.log(`username is ${obj.name} and marks is ${obj.num}`)

// let arr = [2,3,4,5,46,6,7];

// delete arr[1];
// console.log(arr);



// Spread Operator
// let arr = [1,2,3,4,5,6,43]


// console.log(typeof(arr))
// console.log(arr)
// console.log(...arr)
// console.log(arr);

let arr = [1,2,3,4,5,6,78];

let arr1 = [23,4,54,90,79];

let third = arr + arr1
console.log(third);
x = third[1]
console.log(x);

// let response = [...arr , ...arr1];
// console.log(response);

// console.log(response[3]);


let val1 = 4;
let val2 = 3;

let result = val1 ** val2
console.log(result);

let str1 = 'abcd';
let str2 = 'jaklm';

let result1 = str1 ** str2;
console.log(result1)


