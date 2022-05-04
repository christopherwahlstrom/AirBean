import './Menu.css';

import Header from '../components/Header';
import MenuItem from '../components/MenuItem';
import { useState } from 'react';

function Menu(props) {

    const { menu } = props;

    const menuItems = menu.map((menuItem, index) => {
        return <MenuItem title={ menuItem.title } price={ menuItem.price } desc={ menuItem.desc } key={ index }/>
    });

    return (
        <article className="menu leafyBackground">
            <Header />
            <h1 className="menu--title">Meny</h1>
            { menuItems }
        </article>
    );
}

export default Menu;