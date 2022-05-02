import Header from '../components/Header';
import MenuItem from '../components/MenuItem';
import TopBackground from '../graphics/._graphics-footer.svg'

function Menu() {
    console.log(TopBackground);
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