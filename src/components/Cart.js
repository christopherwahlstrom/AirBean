import './Cart.css'

function Cart(props) {
    const { visible, setVisibleCart } = props;
    let classNames = "cart-wrapper";

    if(visible) {
        classNames += " overlay-visible";
    } else {
        classNames = "cart-wrapper";
    }

    function closeOverlay() {
        console.log("click");
        setVisibleCart(false);
        /* MOVE ON TO NEXT PAGE IN ORDER */
    }

    return (
        <section className={ classNames } >
            <div className='triangle'></div>
            <article className='cart'>
                <h1>Din Beställning</h1>
                <article className='sum-container'>
                    <h2 className='total'>Total</h2>
                    <section className='dots'></section>
                    <h2 className='sum'>98 kr</h2>
                </article>
                <p>Inkl. moms + drönarleverans</p>
                <button className='cart-btn' onClick={ closeOverlay }>Take my money!</button>
            </article>
        </section>
    );
}

export default Cart;