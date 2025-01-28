console.log('hello');

// for in 

// let str = 'hello';

// for(strs in str){
//     console.log(strs)
// }

// for(strs of str){
//     console.log(strs)
// }



// let arr = [23,45,56,78,89];

// for(arrs in arr){
//      console.log(arrs)
// }

// for (arrs of arr) {
//     console.log(arrs)
// }


// break statemetn
// let i = 10;

// for (let j = 1; j <= 20; j++) {
//     if (i == j) {
//         console.log('the condition is break')
//         break;
//     }
//     console.log(j)
// }


// let x = 1;
// while(x <=10){
//         if(x==5){
//                 break;
//         }
//         console.log(x);
//          x++;
// }
// console.log('exiting the loop');


// let str = 'the base line';
// for (strs of str) {
//         if (strs == 'l') {
//                 break;
//         }
//         console.log(strs);
// }


// continue statement
//     for (let i = 1; i < 5; i++) {
//     if(i == 10){
//         continue;
//     }
//     console.log(i);
// }

// console.log('Exiting the loop');


// for (let x = 1; x <= 5; x++) {
//     if (x == 3) {
//        continue;   
//     }
//     console.log(x);
//  }

// for (let i=0; i<20; i++){
//     if(i == 10){
//         continue;
//     }
//     console.log(i)
// }


// switch statement
let i = 4;
switch (i) {
    case 1:
        console.log('this is not value of i');
        break;

    case 2:
        console.log('this is not value of i');
        break;

    case 3:
        console.log('this is value of i');
        break;

    default:
        console.log('not find the value of i');
}


let day = 'mo';
switch(day){
    case 'monday':
        console.log('today is monday');
        break;

        case 'tuesday':
        console.log('today is tuesday');
        break;

        case 'wednesday':
        console.log('today is wednesday');
        break;

        case 'thursday':
        console.log('today is thursday');
        break;

        case 'friday':
        console.log('today is friday');
        break;

        case 'saturay':
        console.log('today is saturday');
        break;

        case 'sunday':
        console.log('today is sunday');
        break;

        default :
        console.log(' please right a valid day');

}

