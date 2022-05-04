import './Cart.css';

import { useNavigate } from 'react-router-dom';
import ArrowUp from '../graphics/arrow-up.svg';
import ArrowDown from '../graphics/arrow-down.svg';

function Cart(props) {
    const { visible, setVisibleCart } = props;
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

                <article className="orderItem">
                    <section className="orderItem--texts">
                        <h2 className="orderItem--title">Bryggkaffe</h2>
                        <p className="orderItem--price">14 kr</p>
                    </section>
                    <section className='orderItem-dots dots'></section>

                    <section className="orderItem--amountWrapper">
                        <img src={ ArrowUp } alt="increase amount" />
                        <p>1</p>
                        <img src={ ArrowDown } alt="decrease amount" />
                    </section>
                </article>

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