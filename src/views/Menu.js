import './Menu.css';

import Header from '../components/Header';
import MenuItem from '../components/MenuItem';
import { useState, useEffect } from 'react';

function Menu() {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        async function getMenu() {
            const response = await fetch('https://my-json-server.typicode.com/zocom-christoffer-wallenberg/airbean/menu');
            const data = await response.json();
            setMenu(data);
        }
        getMenu();
    }, []);

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