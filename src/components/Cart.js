import './Cart.css';

import { increment, decrement } from '../actions/counterAction';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';

import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


function Cart(props) {
    const { visible, setVisibleCart } = props;

    const cartItems = useSelector((state) => { return state.item });
    const counter = useSelector((state) => { return state.counter.counter });
    /*
        fix so that localStorage gets items from redux and is saved properly
    */

    // useEffect(() => {
    //     JSON.parse(localStorage.getItem(cartItems));
    // }, []);

    const dispatch = useDispatch();
    /*
    function handleIncrement() {
        dispatch(increment(1));
        console.log(counter)
    }

    function handleDecrement() {
        dispatch(decrement(1));
        console.log(counter)
    }
    */


    const orderItems = cartItems.item.map((item, index) => {
        return <CartItem title={item.title} price={item.price} key={ index }  />
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
                    <h2 className='sum'>98 kr</h2>
                </article>
                <p>Inkl. moms + drönarleverans</p>
                <button className='cart-btn' onClick={ nexxxxxxxtPage }>Take my money!</button>
            </article>
        </section>
    );
}

export default Cart;