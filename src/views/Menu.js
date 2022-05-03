import './Menu.css';

import Header from '../components/Header';
import MenuItem from '../components/MenuItem';
import { useState } from 'react';

async function Menu() {
    const [ title, setTitle ] = useState("Kaffe");
    const [ price, setPrice ] = useState(50);
    const [ desc, setDesc ] = useState("En vanlig jävla kaffe");

    /*const response = await fetch('https://my-json-server.typicode.com/zocom-christoffer-wallenberg/airbean/menu');
    const data = await response.json();
    console.log(data);

    
*/
    return (
        <article className="menu leafyBackground">
                <Header />
                <h1 className="menu--title">Meny</h1>
                <MenuItem title={ title } price={ price + "kr"} desc={ desc } />
        </article>
    );
}

export default Menu;