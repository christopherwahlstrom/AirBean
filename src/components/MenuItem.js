import './MenuItem.css';
import AddIcon from '../graphics/add.svg';

function MenuItem(props) {
    const { title, desc, price } = props;

    return (
        <article className="menuItem">
            <img src={AddIcon} alt="add to cart" />
            <section>
                <h2 className="menuItem--title">{ title }<span className="menuItem--price">{price}</span></h2>
                <p className="menuItem--description">{desc}</p>
            </section>
        </article>
    );
}

export default MenuItem;