import React, { useState } from 'react';
import NavigateObject from '../../json/navigateObject.json';
import './parcer.css';

const Parcer = () => {

   const [nav, setNav] = useState({});
   let fields = [];

   function handleFields(obj) {
      if (obj.length && obj[0].fields) {
         Object.keys(obj[0].fields).forEach(key => {
            fields = [...fields, obj[0].fields[key]];
            return fields;
         });
      }
   }

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
      }
   }
   subCategories_1(cat_1_f);

   let cat_2_f;
   function category_2_filter(obj, category) {
      cat_2_f = obj.filter(item => {
         return (item.id == category.cat2);
      });
      return cat_2_f;
   }
   category_2_filter(subCat_1, nav);

   
   let subCat_2 = [];
   function subCategories_2(obj) {
      if (obj.length && obj[0].subCategories) {
         Object.keys(obj[0].subCategories).forEach(key => {
            subCat_2 = [...subCat_2, obj[0].subCategories[key]];
            return subCat_2;
         });
      }
      handleFields(obj);
   }
   subCategories_2(cat_2_f);

   let cat_3_f;
   function category_3_filter(obj, category) {
      cat_3_f = obj.filter(item => {
         return (item.id == category.cat3);
      });
      return cat_3_f;
   }
   category_3_filter(subCat_2, nav);


   let subCat_3 = [];

   function subCategories_3(obj) {
      if (obj.length && obj[0].subCategories) {
         Object.keys(obj[0].subCategories).forEach(key => {
            subCat_3 = [...subCat_3, obj[0].subCategories[key]];
            return subCat_3;
         });
         }
         handleFields(obj);
   }
   
   let cat_4_f;
   function category_4_filter(obj, category) {
      cat_4_f = obj.filter(item => {
         return (item.id == category.cat4);
      });
      return cat_4_f;
   }
   
   function subCategories_4(obj) {
      handleFields(obj);
   }

   subCategories_3(cat_3_f);
   category_4_filter(subCat_3, nav);
   subCategories_4(cat_4_f);

   return (
      <div className="parser">
         <select onChange={e => { setNav({ cat1: e.target.value }) }}>
         
            {category_1.map(opt => {
               return <option key={opt.id} value={opt.id}>{opt.name}</option>
            })}
         </select>

         {nav.cat1 && <select onChange={e => { setNav({ ...nav, cat2: e.target.value, cat3: '' }) }}>
         
            {subCat_1.map(opt => {
               return <option key={opt.id} value={opt.id}>{opt.name}</option>
            })}
         </select>}

         {nav.cat2 && subCat_2.length > 0 && <select onChange={e => { setNav({ ...nav, cat3: e.target.value, cat4: '' }) }}>
         
            {subCat_2.map(opt => {
               return <option key={opt.id} value={opt.id}>{opt.name}</option>
            })}
         </select>}

         {nav.cat3 && subCat_3.length > 0 && <select onChange={e => { setNav({ ...nav, cat4: e.target.value }) }}>
           
            {subCat_3.map(opt => {
               return <option key={opt.id} value={opt.id}>{opt.name}</option>
            })}
         </select>}
         <div>{fields.length && Object.keys(fields[1]).map(field => {
            return <div>{field}</div>
         })}</div>
            <div>
            {`Стэйт: ${(nav && nav.cat1) ? nav.cat1 : ''}
            ${(nav.cat1 && nav.cat2) ? nav.cat2 : ''} 
            ${(nav.cat2 && nav.cat3) ? nav.cat3 : ''} 
            ${(nav.cat3 && nav.cat4) ? nav.cat4 : ''}`}
            </div>
      </div>
   )
}

export default Parcer
