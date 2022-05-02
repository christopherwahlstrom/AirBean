import './NavMenu.css';

import buttonImg from '../graphics/close.svg'

function NavMenu() {
    return (
        <section className="navmenu">
            <input className='close-btn' type="image" src={ buttonImg } />
        </section>
    );
}

export default NavMenu;