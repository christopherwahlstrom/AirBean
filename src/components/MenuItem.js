import './MenuItem.css';

function MenuItem(props) {
    const { title, desc, price } = props;

    return (
        <article className="menuItem">
            <button className="menuItem--button">+</button>
            <section>
                <h2 className="menuItem--title">{ title }<span className="menuItem--price">{price}</span></h2>
                <p className="menuItem--description">{desc}</p>
            </section>
        </article>
    );
}

export default MenuItem;