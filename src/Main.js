import React, {useState} from 'react'
import NavigateObject from './json/navigateObject.json';

export default function Main() {


// for (let key in NavigateObject.category) {
//    if (typeof(NavigateObject.category[key].subCategories) === 'object') {
//       for (let i in NavigateObject.category[key].subCategories) {
//          console.log(NavigateObject.category[key].subCategories[i]);
//       }
//    } else {
//       console.log(NavigateObject.category[key]);
//    }
// }

const [nav, setNav] = useState({});

const handleChange = e => {
   e.preventDefault();
   setNav({category: e.target.value});
};

let arr = [];

function categories(obj) {
for (let key in obj.category) {
   arr = arr.concat([{id: obj.category[key].id, name: obj.category[key].name}]);
   } 
   arr = (
   <select  onChange={(e) => {handleChange(e)}}> 
      {arr.map(item => {
     return (
     <option key={item.id} value={item.name}>{item.name}</option>
     )})} 
   </select>
)
}

categories(NavigateObject);

const navObj = NavigateObject.category;

function sort(obj) {
   for (let key in obj) {
      if (typeof(obj[key].subCategories) === 'object') {
         for (let i in obj[key].subCategories) {
            console.log(obj[key].subCategories[i])
         }
      }
   }
}


// let arr2 = [
// {id: 1, name: 'Acura'},
// {id: 2, name: 'Lexus'},
// {id: 3, name: 'Infinity'},
// {id: 4, name: 'Mazda'},
// {id: 5, name: 'Subaru'}
// ];

// const output = arr2.forEach(item => {
//    console.log(item.name)
// });

const nO = [navObj];

let iip = nO.map((item, i) => {
  i = Object.keys(item);
  return ( <div>{item.i}</div>)
})

   return (
      <main className="main">

   {arr}
   <div>Выбрано: {nav.category}</div>
   {iip}
      </main>
   )
}
