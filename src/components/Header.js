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
        console.log(visibleCart);
        if(!visibleCart) {
            setVisibleCart(true);
        } else {
            setVisibleCart(false);
        }
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
            
            <section className="orderAmount">10</section>

            <NavMenu visible={visibleNavMenu} setVisibleNavMenu={ setVisibleNavMenu } />
            <Cart visible={visibleCart} setVisibleCart={setVisibleCart} />
        </section>
    );
}

export default Header;