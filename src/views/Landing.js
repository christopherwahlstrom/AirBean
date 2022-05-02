import './Landing.css';

import landingLogo from '../graphics/airbean-landing.svg'
import landingLeft from '../graphics/intro-graphic-left.svg'
import landingRight from '../graphics/intro-graphic-right.svg'

function Landing() {
    return (
        <section className="landing">
            <img className='img-left' src={ landingLeft } alt="" />
            <img className='img-logo' src={ landingLogo } alt="" />
            <img className='img-right' src={ landingRight } alt="" />
        </section>
    );
}

export default Landing;