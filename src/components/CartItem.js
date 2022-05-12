import './CartItem.css';

import ArrowUp from '../graphics/arrow-up.svg';
import ArrowDown from '../graphics/arrow-down.svg';

import { addQuantity } from '../actions/cartActions';
import { decreaseQuantity } from '../actions/cartActions';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../actions/cartActions';
import { saveToLocalstorage } from '../actions/cartActions';


function CartItem(props) {
    const { title, price, quantity } = props;
    const dispatch = useDispatch();

    function addQuant() {
      dispatch(addQuantity(title));
      dispatch(saveToLocalstorage());
    }

    function decreaseQuant() {
      dispatch(decreaseQuantity(title));
      dispatch(deleteItem(title));
      dispatch(saveToLocalstorage());
    }


    return (
      <article className="cartItem">
        <section className="cartItem--texts">
          <h2 className="cartItem--title">{ title }</h2>
          <p className="cartItem--price">{ price } kr</p>
        </section>

        <section className="dots"></section>

        <section className="cartItem--amountWrapper">
          <img onClick={ addQuant } src={ ArrowUp } alt="increase amount" />
          <p>{ quantity }</p>
          <img onClick={ decreaseQuant } src={ ArrowDown } alt="decrease amount" />
        </section>
      </article>
    );
}

export default CartItem;