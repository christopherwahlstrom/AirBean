import './Order.css';
import drone from '../graphics/drone.svg';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


function Order() {

    const navigate = useNavigate();

    const [order, setOrder] = useState([]);

    useEffect(() => {
        async function getOrder() {
            const response = await fetch('https://my-json-server.typicode.com/zocom-christoffer-wallenberg/airbean/order');
            const data = await response.json();
            setOrder(data);
        }
        getOrder();
    }, []);

    return (
        <section className='order-page'>
            <p>Ordernummer<span className='order-number'>{ order.orderNr }</span></p>
            <img src={ drone }></img>
            <h1>Din beställning <br /> är på väg!</h1>
            <span className='time'>{ order.eta }</span><p className='minutes'>minuter</p>
            <button onClick={ () => { navigate('/menu') } }>Ok, cool!</button>
        </section>
    );
}

export default Order;