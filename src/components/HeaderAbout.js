import './HeaderAbout.css';

import NavMenu from './NavMenu';
import navicon from '../graphics/navicon.svg';
import { useState } from 'react';

function HeaderAbout() {

    const [visibleNavMenu, setVisibleNavMenu] = useState(false);
    
    function showNav() {
        setVisibleNavMenu(true);
    }

    return (
        <section className="header--about">
            <section className="header--iconWrapper iconWrapper--nav-about" onClick={ showNav }>
                <img src={ navicon } alt="shopping bag" className="header--icon" />
            </section> 
            
            <NavMenu visible={visibleNavMenu} setVisibleNavMenu={ setVisibleNavMenu } />
        </section>
    );
}

export default HeaderAbout;