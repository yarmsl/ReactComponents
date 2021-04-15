import React, { useState, useEffect } from 'react'
import "./modal.css";

export const Modal = ({ title, content, size, isOpen }) => {
    const [opened, setOpened] = useState('');
    let blackout = document.querySelector(".blackout");
    useEffect(() => {
        if (isOpen) {
            setOpened(' openModal');
        }
    }, [isOpen])


    function handleClose(e) {
        e.preventDefault();
        setOpened('');
    }
    window.onclick = function (e) {
        if (e.target === blackout) {
            setOpened('');
        }
    };

    return (
        <div className={`blackout${opened}`}>
            <div className={`modalWindow${opened} modal${size}`}>
                <div className={(!title) ? ('mtD') : ('modalTitle')}>
                    {title}
                </div>
                <div className="modalContent">
                    {content}
                </div>
                <button onClick={handleClose} className="modalClose">
                </button>
            </div>
        </div>
    )
}

// Код
// const [modal, setModal] = useState({});
// function modalOlen(e, size, content, title) {
//   function smf() {
//     setModal({ title: title, content: content, size: size, isOpen: false });
//     console.log(modal)
//   }
//   e.preventDefault();
//   setModal({ title: title, content: content, size: size, isOpen: true });
//   console.log(modal);
//   setTimeout(smf, 500);
// }

// Рендер
{/* <Modal {...modal} /> */ }

// Событие
// onClick={e => { modalOlen(e, 'sm/md/lg/xl', 'content, 'title если нужен') }}