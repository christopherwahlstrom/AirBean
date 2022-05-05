import './CartItem.css';

import { useDispatch } from 'react-redux';
import itemAction from '../actions/itemAction';
import { useSelector } from 'react-redux';

import ArrowUp from '../graphics/arrow-up.svg';
import ArrowDown from '../graphics/arrow-down.svg';
import { useEffect } from 'react';


function CartItem(props) {
    let { title, price } = props;

    const dispatch = useDispatch();


    // const cartItems = useSelector((state) => { return state.item });

    return (
      <article className="cartItem">
        <section className="cartItem--texts">
          <h2 className="cartItem--title">{ title }</h2>
          <p className="cartItem--price">{ price } kr</p>
        </section>

        <section className="cartItem-dots dots"></section>

        <section className="cartItem--amountWrapper">
          <img src={ ArrowUp } alt="increase amount" />
          <p></p>
          <img src={ ArrowDown } alt="decrease amount" />
        </section>
      </article>
    );
}

export default CartItem;