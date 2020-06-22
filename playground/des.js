console.log("des");
//object destructuring
// const person = {
//     name :'nikhil',
//     age : 23,
//     location : {
//         city : 'waterloo',
//         temp : 23
//     }
// }

// // const name = person.name;
// // const age = person.age;
// // const location = person.location.city
// const { name:personName = 'anonymous' , age } = person;
// const {city , temp} = person.location
// console.log(`${personName} is ${age} years old`);
// console.log(`its ${temp}`)

//array destructure.

// const address = ['75','121 university ave east','waterloo','ON','N2J4J1'];

// const [streetNo,streetname,city,state,zipcode] = address
// console.log(`you are in ${city} , ${zipcode}`)
 
const menu = ['coffee','2.00','2.50','3.00']

const [itemname,small,medium,large] = menu

console.log(`${itemname}`)