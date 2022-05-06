import './MenuItem.css';

import { useDispatch } from 'react-redux';
import itemAction from '../actions/itemAction';
import { useSelector } from 'react-redux';

import AddIcon from '../graphics/add.svg';
import CartItem from './CartItem';
import { useEffect, useState } from 'react';


function MenuItem(props) {
    const { title, desc, price, id } = props;
    
    const dispatch = useDispatch();

    const counter = useSelector((state) => { return state.counter.counter });
    // console.log(counter)

    const cartItems = useSelector((state) => { return state.item });
    console.log(cartItems.item);

    useEffect(() => {
        JSON.parse(localStorage.getItem("cartItems"));
    }, []);

    function addToCart() {
        dispatch(itemAction({ title: title, price: price, id: id, counter: counter }));
        console.log(title);
        
        const cartItemsCopy = [...cartItems.item];
        localStorage.setItem("cartItems", JSON.stringify(cartItemsCopy));
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