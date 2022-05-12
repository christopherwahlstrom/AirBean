import './Cart.css';

import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';

import { useSelector, useDispatch } from 'react-redux';

import { emptyCart } from '../actions/cartActions';


function Cart(props) {
    const cartItems = useSelector((state) => { return state.cartItems });
    const { visible, setVisibleCart } = props;
    const navigate = useNavigate();
    let classNames = "cart-wrapper";
    let totalPrice = 0;

    const orderItems = cartItems.map((item, index) => {
        return <CartItem quantity={ item.quantity } title={item.title} price={item.price} key={ index } />
    });


   let coffee = 0;
   let pastry = 0;
   const discount = 38;
    for(let item of cartItems) {
        totalPrice += item.price * item.quantity;

        if(item.title === "Bryggkaffe"){
            coffee = item.quantity;
        }else if(item.title === "Gustav Adolfsbakelse"){
            pastry = item.quantity;
        }
    }
    
    if(coffee > pastry){
        totalPrice -= pastry * discount;
    } else {
        totalPrice -= coffee * discount;
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

    const dispatch = useDispatch();

    function setOrder() {
        localStorage.clear();
        setVisibleCart(false);
        dispatch(emptyCart());
        navigate('/order');
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
                <button className='cart-btn' onClick={ setOrder }>Take my money!</button>
            </article>
        </section>
    );
}

export default Cart;