import './CartItem.css';

import ArrowUp from '../graphics/arrow-up.svg';
import ArrowDown from '../graphics/arrow-down.svg';


function CartItem(props) {
    const { title, price, quantity } = props;

    return (
      <article className="cartItem">
        <section className="cartItem--texts">
          <h2 className="cartItem--title">{ title }</h2>
          <p className="cartItem--price">{ price } kr</p>
        </section>

        <section className="cartItem-dots dots"></section>

        <section className="cartItem--amountWrapper">
          <img src={ ArrowUp } alt="increase amount" />
          <p>{ quantity }</p>
          <img src={ ArrowDown } alt="decrease amount" />
        </section>
      </article>
    );
}

export default CartItem;