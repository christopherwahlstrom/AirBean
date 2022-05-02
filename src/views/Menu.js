import Header from '../components/Header';
import MenuItem from '../components/MenuItem';

function Menu() {
    return (
        <article className="menu">
            <Header />
            <h1>Meny</h1>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
        </article>
    );
}

export default Menu;