import './Menu.css';

import Header from '../components/Header';
import MenuItem from '../components/MenuItem';
import { useState, useEffect } from 'react';

function Menu(props) {

    const { menuAPI } = props;

    const menuItems = menuAPI.map((menuItem, index) => {
        return <MenuItem title={ menuItem.title } price={ menuItem.price } desc={ menuItem.desc } key={ index } id={ menuItem.id } />
    });
    console.log(menuAPI);
    
    return (
        <article className="menu leafyBackground">
            <Header />
            <h1 className="menu--title">Meny</h1>
            { menuItems }
        </article>
    );
}

export default Menu;