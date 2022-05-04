import './MenuItem.css';
import { useDispatch } from 'react-redux';
import itemAction from '../actions/itemAction';

function MenuItem(props) {
    const { title, desc, price } = props;

    const dispatch = useDispatch();

    function addToCart() {
        dispatch(itemAction({ title: title, price: price }));
    }

    return (
        <article className="menuItem">
            <button className="menuItem--button" onClick={ addToCart }>+</button>
            <section>
                <h2 className="menuItem--title">{ title }<span className="menuItem--price">{price}</span></h2>
                <p className="menuItem--description">{desc}</p>
            </section>
        </article>
    );
}

export default MenuItem;