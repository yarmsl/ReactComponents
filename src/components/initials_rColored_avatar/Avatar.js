import React, {useState} from 'react';
import './avatar.css';

const Avatar = () => {
const [name, setName] = useState('Ярослав Макаров');

    function initials() {
         return this.substr(0, 1);
      }

      function stringToColor() {
        var hash = 0;
        var color = '#';
        var i;
        var value;
        var strLength;
        if (!this) {
          return color + '4ec990';
        }
        strLength = this.length;
        for (i = 0; i < strLength; i++) {
          hash = this.charCodeAt(i) + ((hash << 5) - hash);
        }
        for (i = 0; i < 3; i++) {
          value = (hash >> (i * 8)) & 0xFF;
          color += ('00' + value.toString(16)).substr(-2);
        }
        return color;
    }

    String.prototype.initials = initials;
    String.prototype.toColor = stringToColor;

    const handleChange = e => {
      e.preventDefault();
      setName(e.target.value)
    }

    return (
        <div className="user">
            <div className="user__avatar">{<div className="user__initials" style={{ backgroundColor: `${name.toColor()}` }}>{name.initials()}</div>}</div>
            <div className="user__name"><input value={name} onChange={e=>handleChange(e)} /></div>
        </div>
    )
}

export default Avatar
