import React, { useState } from 'react'
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
      setNav({ category: e.target.value });
   };

   let arr = [];

   function categories(obj) {
      for (let key in obj.category) {
         arr = arr.concat([{ id: obj.category[key].id, name: obj.category[key].name }]);
      }
      arr = (
         <select onChange={(e) => { handleChange(e) }}>
            {arr.map(item => {
               return (
                  <option key={item.id} value={item.name}>{item.name}</option>
               )
            })}
         </select>
      )
   }

   categories(NavigateObject);

   const testObj = NavigateObject.category.real_estate.subCategories.commercial_property_second.subCategories.Building_estate.subCategories.rent_building.fields['Сдать в аренду']

   console.log(testOoj);
function sort(obj) {
      for (let key in obj) {
         if (typeof (obj[key].subCategories) === 'object') {
            for (let i in obj[key].subCategories) {
               console.log(obj[key].subCategories[i])
            }
         }
      }
   }


   return (
      <main className="main">

         {arr}
         <div>Выбрано: {nav.category}</div>

      </main>
   )
}
