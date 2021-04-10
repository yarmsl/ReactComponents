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

let arr = [];
function categories(obj) {
for (let key in obj.category) {
   arr = arr.concat([{id: obj.category[key].id, name: obj.category[key].name}]);
   } 
   arr = (
   <select> 
      <option></option>
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
sort(navObj);
   return (
      <main className="main">

   {arr}

      </main>
   )
}
