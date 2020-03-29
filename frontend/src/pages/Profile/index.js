import React from 'react';

import logoImg from '../../assets/logo.svg';
import './styles.css';

export default function Profile () {
    return (
        <div className="profile-container">
            <header>
            <img src={logoImg} alt="Be The Hero" />
            </header>
        </div>
    );
}