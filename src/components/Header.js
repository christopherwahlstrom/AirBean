import './Header.css';

import Cart from './Cart';
import NavMenu from './NavMenu';

import shoppingBag from '../graphics/bag.svg';
import navicon from '../graphics/navicon.svg';

import { useState } from 'react';
import { useSelector } from 'react-redux';

function Header() {
    const [visibleNavMenu, setVisibleNavMenu] = useState(false);
    const [visibleCart, setVisibleCart] = useState(false);

    const cartItems = useSelector((state) => { return state.cartItems });
    
    function showCart() {
        if(!visibleCart) {
            setVisibleCart(true);
        } else {
            setVisibleCart(false);
        }
    }
    
    function showNav() {
        setVisibleNavMenu(true);
    }

    let styling;
    if(cartItems.length == 0) {
        styling = {display: 'none'};
    }

    let quantity = 0;
    cartItems.map((item) => {
        quantity += item.quantity;
    });

    return (
        <section className="header leafyBackground-header">
            <section className="header--iconWrapper iconWrapper--nav" onClick={ showNav }>
                <img src={ navicon } alt="shopping bag" className="header--icon" />
            </section>

            <section className="header--iconWrapper iconWrapper--cart" onClick={ showCart } >
                <section className="orderAmount" style={styling}>
                    <p>{ quantity }</p>
                </section>
                <img src={ shoppingBag } alt="shopping bag" className="header--icon" />
            </section>
            

            <NavMenu visible={visibleNavMenu} setVisibleNavMenu={ setVisibleNavMenu } />
            <Cart visible={visibleCart} setVisibleCart={setVisibleCart} />
        </section>
    );
}

export default Header;