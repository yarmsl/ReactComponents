import React, { useState } from 'react';
import Parcer from './components/parser/Parcer';
import { Modal } from './components/modal/Modal';
import Photoupload from './components/photoupload/Photoupload';


export default function Main() {
   const [modal, setModal] = useState({});
   function modalOlen(e, size, content, title) {
      function smf() {
         setModal({ title: title, content: content, size: size, isOpen: false });
      }
      e.preventDefault();
      setModal({ title: title, content: content, size: size, isOpen: true });
      setTimeout(smf, 500);
   }

   return (
      <main className="main">
         <Parcer />
         <div className="mainDemo">
            <button onClick={e => { modalOlen(e, 'sm', <Parcer />) }} className="button button_outlined">Модальное окно sm</button>
            <button onClick={e => { modalOlen(e, 'md', 'Содержание', 'Среднее окно') }} className="button button_outlined">Модальное окно md</button>
            <button onClick={e => { modalOlen(e, 'lg', 'Модальное окно', 'Большое') }} className="button button_outlined">Модальное окно lg</button>
            <button onClick={e => { modalOlen(e, 'xl', <Photoupload />, 'Огромное окно') }} className="button button_outlined">Модальное окно xl</button>
         </div>
         <Photoupload />
         <Modal {...modal} />
      </main>
   )
}
