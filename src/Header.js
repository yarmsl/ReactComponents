import React from 'react'
import logo from './logo.svg';
import Avatar from './components/initials_rColored_avatar/Avatar';

export default function Header() {
   return (
      <header className="header">
         <img src={logo} className="header__logo" alt="logo" />
         <h1 className="header__title">&#123; &#60;<span>React</span> Components /&#62; &#125;</h1>
         <Avatar />
      </header>
   )
}
