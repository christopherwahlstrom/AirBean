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
        console.log('tjo!');
        console.log(title);
        // const cartItemsCopy = [...cartItems.item]
        // localStorage.setItem("cartItems", JSON.stringify(cartItemsCopy));
    }

    return (
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
    );
}

export default MenuItem;