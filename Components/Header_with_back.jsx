import React from 'react';
import Header_inner from './Header_inner.jsx';

function Header_with_back() {
    return     <header class="header">
    <div class="header__inner">
        <a href="#" class="back" >
        <Header_inner />
        </a>
    </div>
    
        <div class="navigation">
            <a href="#" class="navigation__link">О нас</a>
            <a href="#" class="navigation__link">Программа обучения</a>
            <a href="#" class="navigation__link">Галерея</a>
            <a href="#" class="navigation__link">Документы</a>
            <a href="#" class="navigation__link">Контакты</a>
        </div>
    
</header>
}


export default Header_with_back;