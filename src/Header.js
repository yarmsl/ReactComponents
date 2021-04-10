import React from 'react'
import logo from './logo.svg';

export default function Header() {
   return (
      <header className="header">
        <img src={logo} className="header__logo" alt="logo" />
        <h1 className="header__title">&#123; Test App &#125;</h1>
      </header>
   )
}
