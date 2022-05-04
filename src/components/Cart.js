import './Cart.css';

import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

import MenuItem from './MenuItem';

function Cart(props) {
    const { visible, setVisibleCart } = props;

    const menuItems = useSelector((state) => { return state.item });

    const menu = menuItems.item.map((item) => {
        return < MenuItem title={item.title} price={item.price}/>
    });
    
    

    let classNames = "cart-wrapper";

    if(visible) {
        classNames += " overlay-visible";
    } else {
        classNames = "cart-wrapper";
    }

    function closeOverlay(event) {
        if(event.target.className === classNames) {
            setVisibleCart(false);
        }
    }

    const navigate = useNavigate();

    function nexxxxxxxtPage() {
        console.log("click");
        setVisibleCart(false);
        navigate('/order');
        /* MOVE ON TO NEXT PAGE IN ORDER */
    }

    return (
        <section className={ classNames } onClick={ closeOverlay } >
            <div className='triangle'></div>
            <article className='cart'>
                <h1>Din Beställning</h1>
                { menu }
                <article className='sum-container'>
                    <h2 className='total'>Total</h2>
                    <section className='dots'></section>
                    <h2 className='sum'>98 kr</h2>
                </article>
                <p>Inkl. moms + drönarleverans</p>
                <button className='cart-btn' onClick={ nexxxxxxxtPage }>Take my money!</button>
            </article>
        </section>
    );
}

export default Cart;