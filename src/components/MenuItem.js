import './MenuItem.css';

import { useDispatch } from 'react-redux';
import itemAction from '../actions/itemAction';
// import { useSelector } from 'react-redux';

import AddIcon from '../graphics/add.svg';
import ArrowUp from '../graphics/arrow-up.svg';
import ArrowDown from '../graphics/arrow-down.svg';


function MenuItem(props) {
    const { title, desc, price } = props;

    const dispatch = useDispatch();

    // const cartItems = useSelector((state) => { return state.item });

    function addToCart() {
        dispatch(itemAction({ title: title, price: price }));
        // const cartItemsCopy = [...cartItems.item]
        // localStorage.setItem("cartItems", JSON.stringify(cartItemsCopy));
    }

    return (
        <section>
            <article className="menuItem">
                <section className="menuItem--button" onClick={ addToCart }>
                    <img src={AddIcon} alt="add to cart" />
                </section>

                <section className="menuItem--infoWrapper">
                    <h2 className="menuItem--title">{ title }</h2>
                    <section className="menuItem-dots dots"></section>
                    <p className="menuItem--description">{desc}</p>
                </section>
                    <h3 className="menuItem--price">{price} kr</h3>
            </article>
            
            <article className="orderItem">
                <section className="orderItem--texts">
                    <h2 className="orderItem--title">{ title }</h2>
                    <p className="orderItem--price">{ price } kr</p>
                </section>

                <section className="orderItem-dots dots"></section>

                <section className="orderItem--amountWrapper">
                    <img src={ ArrowUp } alt="increase amount" />
                    <p>1</p>
                    <img src={ ArrowDown } alt="decrease amount" />
                </section>
            </article>
        </section>
    );
}

export default MenuItem;