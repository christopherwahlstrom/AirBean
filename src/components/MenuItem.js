import './MenuItem.css';

import { useDispatch } from 'react-redux';
import itemAction from '../actions/itemAction';
// import { useSelector } from 'react-redux';

import AddIcon from '../graphics/add.svg';


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
        <article className="menuItem">

            <section className="menuItem--button" onClick={ addToCart }>
                <img src={AddIcon} alt="add to cart" />
            </section>

            <section>
                <h2 className="menuItem--title">{ title }<span className="menuItem--price">{price}</span></h2>
                <p className="menuItem--description">{desc}</p>
            </section>
        </article>
    );
}

export default MenuItem;