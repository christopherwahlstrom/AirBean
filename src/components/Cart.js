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

    /* Om du köper en Bryggkaffe och en Gustav Adolfsbakelse får du den för ett kampanjpris av 40 kr
    
    */
   let bryggkaffe = 0;
   let bakelse = 0;
   let discount = 38;
    for(let item of cartItems) {
        totalPrice += item.price * item.quantity;

        if(item.title === "Bryggkaffe"){
            console.log("Det finns bryggkaffe!");
            bryggkaffe = item.quantity;
        }else if(item.title === "Gustav Adolfsbakelse"){
            bakelse = item.quantity;
            console.log("Det finns Gustav Adolfsbakelse!");
        }
        // Kolla hur många Bryggkaffe och Gustav Adolfsbakelse det finns
        // och välj det lägsta antalet för att lägga på rabatten (49kr) för varje kombo
    }
    console.log("antal bryggkaffe: ", bryggkaffe);
    console.log("antal bakelser: ", bakelse);
    console.log("total price före rabatt: ", totalPrice);
    
    if(bryggkaffe > bakelse){
        totalPrice -= bakelse * discount;
    } else {
        totalPrice -= bryggkaffe * discount;
    }
    console.log("total price efter rabatt: ", totalPrice);

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