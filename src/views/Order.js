import './Order.css';
import drone from '../graphics/drone.svg';
import { useNavigate } from 'react-router-dom';


function Order() {

    const navigate = useNavigate();

    return (
        <section className='order-page'>
            <p>Ordernummer<span className='order-number'></span></p>
            <img src={ drone }></img>
            <h1>Din beställning <br /> är på väg!</h1>
            <span className='time'></span><p className='minutes'>minuter</p>
            <button onClick={ () => { navigate('/menu') } }>Ok, cool!</button>
        </section>
    );
}

export default Order;