import './Menu.css';

import Header from '../components/Header';
import MenuItem from '../components/MenuItem';
import { useState } from 'react';

function Menu(props) {

    const { menu } = props;

    //Härifrån och ner till och med rad 24 försökte jag mig på liknande som vi gjorde tillsammans med Monica igår, 
    //men för att få tag i "visible/visibleCart" behöver props hoppa fler än 1 steg, så då kanske det är bäst att 
    //använda reducer till detta //HE

    const [darkness, setDarkness] = useState();

    let classnames = "menu leafyBackground";

    if(darkness) {
        classnames += " darkness";
    } else {
        classnames = "menu leafyBackground";
    }

    // Här slutar den ofärdiga koden som nämns på rad 10 //HE

    const menuItems = menu.map((menuItem, index) => {
        return <MenuItem title={ menuItem.title } price={ menuItem.price } desc={ menuItem.desc } key={ index }/>
    });

    return (
        <article className={ classnames }>
            <Header setDarkness={ setDarkness } />
            <h1 className="menu--title">Meny</h1>
            { menuItems }
        </article>
    );
}

export default Menu;