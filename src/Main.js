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
         <section>
            <h1><span>Парсер</span> json</h1>
            <p>На select c одним стэйтом</p>
         <Parcer />
         </section>
         <section>
            <h1><span>Модальное</span> окно</h1>
            <p>Передаётся размер, заголовок, контент</p>
         <div className="mainDemo">
            <button onClick={e => { modalOlen(e, 'sm', <Parcer />) }} className="button button_outlined">Модальное окно sm</button>
            <button onClick={e => { modalOlen(e, 'md', 'Содержание', 'Среднее окно') }} className="button button_outlined">Модальное окно md</button>
            <button onClick={e => { modalOlen(e, 'lg', 'Модальное окно', 'Большое') }} className="button button_outlined">Модальное окно lg</button>
            <button onClick={e => { modalOlen(e, 'xl', <Photoupload />, 'Огромное окно') }} className="button button_outlined">Модальное окно xl</button>
         </div>
         </section>
         <section>
            <h1><span>Drag&Drop</span> загрузка изображений</h1>
            <p>Массовая загрузка, выбор главной, (png, jpg) c валидацией, пережатием в webp, 1200px по большей стороне и вращением</p>
         <Photoupload />
         </section>
         <Modal {...modal} />
      </main>
   )
}
