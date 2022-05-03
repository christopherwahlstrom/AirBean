import './Menu.css';

import Header from '../components/Header';
import MenuItem from '../components/MenuItem';

async function Menu(props) {
    /*const response = await fetch('https://my-json-server.typicode.com/zocom-christoffer-wallenberg/airbean/menu');
    const data = await response.json();
    console.log(data);
*/
    return (
        <article className="menu leafyBackground">
                <Header />
                <h1 className="menu--title">Meny</h1>
                <MenuItem title="kaffe" price="10kr" desc="en vanlig jävla kaffe" />
        </article>
    );
}

export default Menu;