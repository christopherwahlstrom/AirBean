import './Header.css';

import Cart from './Cart';
import NavMenu from './NavMenu';
import shoppingBag from '../graphics/bag.svg';
import navicon from '../graphics/navicon.svg';
import { useState } from 'react';

function Header() {
    const [visibleNavMenu, setVisibleNavMenu] = useState(false);
    const [visibleCart, setVisibleCart] = useState(false);

    function showCart() {
        setVisibleCart(true);
    }
    
    function showNav() {
        setVisibleNavMenu(true);
    }

    return (
        <section className="header">
            <section className="header--iconWrapper iconWrapper--nav" onClick={ showNav }>
                <img src={ navicon } alt="shopping bag" className="header--icon" />
            </section>

            <section className="header--iconWrapper iconWrapper--cart" onClick={ showCart } >
                <img src={ shoppingBag } alt="shopping bag" className="header--icon" />
            </section>
            
            < NavMenu visible={visibleNavMenu} />
        </section>
    );
}

export default Header;