import './Cart.css';

import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';

import { useSelector } from 'react-redux';


function Cart(props) {
    const cartItems = useSelector((state) => { return state.cartItems });
    const { visible, setVisibleCart } = props;
    const navigate = useNavigate();
    let classNames = "cart-wrapper";
    let totalPrice = 0;

    const orderItems = cartItems.map((item, index) => {
        return <CartItem quantity={ item.quantity } title={item.title} price={item.price} key={ index } />
    });

    for(let item of cartItems) {
        totalPrice += item.price * item.quantity;
    }

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

    function nexxxxxxxtPage() {
        localStorage.clear();
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

                { orderItems }

                <article className='sum-container'>
                    <h2 className='total'>Total</h2>
                    <section className='dots'></section>
                    <h2 className='sum'>{ totalPrice } kr</h2>
                </article>
                <p>Inkl. moms + drönarleverans</p>
                <button className='cart-btn' onClick={ nexxxxxxxtPage }>Take my money!</button>
            </article>
        </section>
    );
}

export default Cart;