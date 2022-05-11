import './Menu.css';

import Header from '../components/Header';
import MenuItem from '../components/MenuItem';
import Footer from '../components/Footer';

function Menu(props) {

    const { menu } = props;

    const menuItems = menu.map((menuItem, index) => {
        return <MenuItem quant={ 1 } title={ menuItem.title } price={ menuItem.price } desc={ menuItem.desc } key={ index }/>
    });

    return (
        <>
        <Header />
        <article className="menu">
            
            <h1 className="menu--title">Meny</h1>
            { menuItems }
        </article>
        <Footer />
        </>
    );
}

export default Menu;