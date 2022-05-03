import './MenuItem.css';

function MenuItem() {

    return (
        <article className="menuItem">
            <button className="menuItem--button">+</button>
            <section>
                <h2 className="menuItem--title">Bryggkaffe <span className="menuItem--price">49kr</span></h2>
                <p className="menuItem--description">Bryggd på månadens bönor</p>
            </section>
        </article>
    );
}

export default MenuItem;