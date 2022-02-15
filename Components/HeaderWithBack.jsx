import React from 'react';
import HeaderInner from './HeaderInner.jsx';

function HeaderWithBack() {
    return     <header className="header">
    <div className="header__inner">
        <a href="#" className="back" >
        <HeaderInner />
        </a>
    </div>
    
        <div className="navigation">
            <a href="#" className="navigation__link">О нас</a>
            <a href="#" className="navigation__link">Программа обучения</a>
            <a href="#" className="navigation__link">Галерея</a>
            <a href="#" className="navigation__link">Документы</a>
            <a href="#" className="navigation__link">Контакты</a>
        </div>
    
</header>
}


export default HeaderWithBack;