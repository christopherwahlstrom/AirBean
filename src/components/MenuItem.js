import './MenuItem.css';

import { useDispatch } from 'react-redux';
import { addItemAction } from '../actions/cartActions';

import AddIcon from '../graphics/add.svg';

import { saveToLocalstorage } from '../actions/cartActions';


function MenuItem(props) {
    const { title, desc, price } = props;
    const dispatch = useDispatch();
    
    function addToCart() {
        const initialQuantity = 1;

        dispatch(addItemAction({ 
            title: title, 
            price: price, 
            quantity: initialQuantity,
            key: 0
        }));

        dispatch(saveToLocalstorage());
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