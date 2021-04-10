import React from 'react'

export const Main2 = () => {


   const arr2 = [
      {name: 'Недвижимость'},
      {name: 'апапап'}
   ];
   
   
 const ass = arr2.map(item => {
     return (<div>{item.name}</div>)
   });


   return (
      <main className="main">
   {ass}
      </main>
   )
}
