import './Cart.css';

import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';

import { useSelector } from 'react-redux';


function Cart(props) {
    const cartItems = useSelector((state) => { return state });
    const { visible, setVisibleCart } = props;
    const navigate = useNavigate();
    let classNames = "cart-wrapper";
    
    let orderItems;
    orderItems = cartItems.item.map((item, index) => {
        console.log(item);
        return <CartItem quantity={ item.quantity } title={item.title} price={item.price} key={ index } />
    });
    
    
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
                    <h2 className='sum'>98 kr</h2>
                </article>
                <p>Inkl. moms + drönarleverans</p>
                <button className='cart-btn' onClick={ nexxxxxxxtPage }>Take my money!</button>
            </article>
        </section>
    );
}

export default Cart;