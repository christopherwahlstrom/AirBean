import './NavMenu.css';

import buttonImg from '../graphics/close.svg';

import { Link } from 'react-router-dom';

function NavMenu(props) {
    const { visible } = props;
    console.log(visible);
    if(visible) {
        
    }

    return (
        <article className="navmenu">
            <section className="btn-container">
                <input className='close-btn' type="image" src={ buttonImg } alt="" />
            </section>
            <nav className="links">
                <Link className='link' to="/menu">Meny</Link>
                <hr />
                <Link className='link' to="/about">Vårt kaffe</Link>
                <hr />
                <Link className='link' to="/order">Orderstatus</Link>
                <hr />
            </nav>
            
        </article>
    );
}

export default NavMenu;