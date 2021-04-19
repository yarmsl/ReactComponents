import React, { useState } from 'react';
import NavigateObject from '../../json/navigateObject.json';
import './parcer.css';

// for (let key in NavigateObject.category) {
//    if (typeof(NavigateObject.category[key].subCategories) === 'object') {
//       for (let i in NavigateObject.category[key].subCategories) {
//          console.log(NavigateObject.category[key].subCategories[i]);
//       }
//    } else {
//       console.log(NavigateObject.category[key]);
//    }
// }

const testarr = NavigateObject.category.transport.subCategories.trucks_and_special_equipment.subCategories.Tractors_and_agricultural_machinery.fields;

const Parcer = () => {

   const [nav, setNav] = useState({});
   let category_1 = [];

   function category(obj) {
      Object.keys(obj).forEach(key => {
         category_1 = [...category_1, obj[key]];
         return category_1;
      });
   }
   category(NavigateObject.category);

let cat_1_f;
   function category_1_filter(obj, category) {
      cat_1_f = obj.filter(item => {
         return (item.id == category.cat1);
      });
    
      return cat_1_f;
   }
   category_1_filter(category_1, nav);


let subCat_1 = [];
   function subCategories_1(obj) {
      if (obj.length) {
      Object.keys(obj[0].subCategories).forEach(key => {
         subCat_1 = [...subCat_1, obj[0].subCategories[key]];
         return subCat_1;
      });
      } else {
         console.log('void');
      }
   }
   
   subCategories_1(cat_1_f);

   console.log(subCat_1);

   return (
      <div className="parser">
         <select onChange={e=>{setNav({cat1: e.target.value})}}>
            {category_1.map(opt => {
               return (<option value={opt.id}>{opt.name}</option>)
            })}
         </select>
         {nav.cat1}
        {nav.cat1 && <select onChange={e => {setNav({...nav, cat2: e.target.value})}}>
            {subCat_1.map(opt => {
               return <option value={opt.id}>{opt.name}</option>
            })}
         </select>}
         {console.log(nav)}
      </div>
   )
}

export default Parcer
