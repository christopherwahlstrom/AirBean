import './Landing.css';

import landingLogo from '../graphics/airbean-landing.svg';
import landingLeft from '../graphics/intro-graphic-left.svg';
import landingRight from '../graphics/intro-graphic-right.svg';

import { useNavigate } from 'react-router-dom';

function Landing() {

    const navigate = useNavigate();

    return (
        <section className="landing">
            <img className='img-left' src={ landingLeft } alt="" />
            <img onClick={ () => navigate('/menu') } className='img-logo' src={ landingLogo } alt="" />
            <img className='img-right' src={ landingRight } alt="" />
        </section>
    );
}

export default Landing;