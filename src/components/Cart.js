import './Cart.css'

function Cart() {
    return (
        <section className='cart-wrapper'>
            <article className='cart'>
                <h1>Din Beställning</h1>
                <article className='sum-container'>
                    <h2 className='total'>Total</h2>
                    <section className='dots'></section>
                    <h2 className='sum'>98 kr</h2>
                </article>
                <p>Inkl. moms + drönarleverans</p>
                <button className='cart-btn'>Take my money!</button>
            </article>
        </section>
    );
}

export default Cart;