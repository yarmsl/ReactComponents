import React from 'react';
import './avatar.css';

const Avatar = () => {

    const user = {
        name: 'Ярослав Макаров',
        userpic: ''
    };

    function initials() {
        let res;
        if (this.indexOf(' ') !== -1) {
          res = `${this.substr(0, 1)}${this.substr((this.indexOf(' ') + 1), 1)}`;
        } else {
          res = this.substr(0, 1);
        }
        return res;
      }

      function stringToColor() {
        var hash = 0;
        var color = '#';
        var i;
        var value;
        var strLength;
        if (!this) {
          return color + '00A0AB';
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

    return (
        <div className="user">
            <div className="user__avatar">{user.userpic && <img src={user.userpic} /> || <div className="user__initials" style={{ backgroundColor: `${user.name.toColor()}` }}>{user.name.initials()}</div>}</div>
            <div className="user__name">{user.name}</div>
        </div>
    )
}

export default Avatar
