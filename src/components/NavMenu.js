import './NavMenu.css';

import buttonImg from '../graphics/close.svg';

import { Link } from 'react-router-dom';

function NavMenu(props) {
    const { visible, setVisibleNavMenu } = props;
    let classNames = "navmenu";

    if(visible) {
        classNames += " overlay-visible";
    } else {
        classNames = "navmenu";
    }

    function closeOverlay() {
        console.log("click");
        setVisibleNavMenu(false);
    }

    return (
        <article className={ classNames }>
            <section className="btn-container">
                <input className='close-btn' type="image" src={ buttonImg } alt="" onClick={ closeOverlay } />
            </section>
            <nav className="links">
                <Link onClick={ closeOverlay } className='link' to="/menu">Meny</Link>
                <hr />
                <Link onClick={ closeOverlay } className='link' to="/about">Vårt kaffe</Link>
                <hr />
                <Link onClick={ closeOverlay } className='link' to="/order">Orderstatus</Link>
                <hr />
            </nav>
        </article>
    );
}

export default NavMenu;