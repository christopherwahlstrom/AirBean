import './Order.css';
import drone from '../graphics/drone.svg';
import { useNavigate } from 'react-router-dom';


function Order(props) {
    
    const { order } = props;

    const navigate = useNavigate();

    return (
        <section className='order-page'>
            <p className='order'>Ordernummer <span className='order-number'>#{ order.orderNr }</span></p>
            <img src={ drone }></img>
            <h1>Din beställning <br /> är på väg!</h1>
            <p className='time'>{ order.eta } <span className='minutes'>minuter</span></p>
            <button onClick={ () => { navigate('/menu') } }>Ok, cool!</button>
        </section>
    );
}

export default Order;