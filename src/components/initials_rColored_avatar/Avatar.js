import React from 'react';
import './avatar.css';

const Avatar = () => {

    const user = {
        name: 'Ярослав Макаров',
        userpic: ''
    };

    function initials(string) {
        let res = `${string.substr(0, 1)}${string.substr((string.indexOf(' ') + 1), 1)}`;
        return res;
    }

    function stringToColor(str) {
        var hash = 0;
        var color = '#';
        var i;
        var value;
        var strLength;
        if (!str) {
            return color + '00A0AB';
        }
        strLength = str.length;
        for (i = 0; i < strLength; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        for (i = 0; i < 3; i++) {
            value = (hash >> (i * 8)) & 0xFF;
            color += ('00' + value.toString(16)).substr(-2);
        }
        return color;
    };

    return (
        <div className="user">
            <div className="user__avatar">{user.userpic && <img src={user.userpic} /> || <div className="user__initials" style={{ backgroundColor: `${stringToColor(user.name)}` }}>{initials(user.name)}</div>}</div>
            <div className="user__name">{user.name}</div>
        </div>
    )
}

export default Avatar
