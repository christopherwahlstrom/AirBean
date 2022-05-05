import './CartItem.css';

import { useDispatch } from 'react-redux';
import { increment, decrement } from '../actions/counterAction';
import { useSelector } from 'react-redux';

import ArrowUp from '../graphics/arrow-up.svg';
import ArrowDown from '../graphics/arrow-down.svg';
import { useState } from 'react';

function CartItem(props) {
    const { title, price, counter, id } = props;

    // const [counter, setCounter] = useState(1);

    const dispatch = useDispatch();

    // const counter = useSelector((state) => { return state.counter.counter });

    function handleIncrement() {
      dispatch(increment(1));
    }
    
    function handleDecrement() {
      dispatch(decrement(1));
    }

    return (
      <article className="cartItem">
        <section className="cartItem--texts">
          <h2 className="cartItem--title">{ title }</h2>
          <p className="cartItem--price">{ price } kr</p>
        </section>

        <section className="cartItem-dots dots"></section>

        <section className="cartItem--amountWrapper">
          <img id={ id } onClick={ handleIncrement } src={ ArrowUp } alt="increase amount" />
          <p>{ counter }</p>
          <img id={ id } onClick={ handleDecrement } src={ ArrowDown } alt="decrease amount" />
        </section>
      </article>
    );
}

export default CartItem;