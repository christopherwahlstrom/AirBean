import './Header.css';

import Cart from './Cart';
import NavMenu from './NavMenu';
import shoppingBag from '../graphics/bag.svg';
import navicon from '../graphics/navicon.svg';

function Header() {
    return (
        <section className="header">
            <section className="header--iconWrapper iconWrapper--nav" onClick={ NavMenu }>
                <img src={ navicon } alt="shopping bag" className="header--icon" />
            </section>

            <section className="header--iconWrapper iconWrapper--cart" onClick={ Cart } >
                <img src={ shoppingBag } alt="shopping bag" className="header--icon" />
            </section>
        </section>
    );
}

export default Header;