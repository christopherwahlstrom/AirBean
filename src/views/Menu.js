import Header from '../Components/Header';
import MenuItem from '../Components/MenuItem';

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