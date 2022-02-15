import React from 'react';
import Header_inner_profile_button from './Header_inner_profile_button.jsx';

function Header_with_profile_button() {
    return <header class="header">
            <div class="header__inner">

                <a href="#" class="profile__button">
                    <Header_inner_profile_button />
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


export default Header_with_profile_button;