import './Landing.css';
import landingLogo from '../graphics/airbean-landing.svg'

function Landing() {
    return (
        <section className="landing">
            <img src={ landingLogo } alt="" />
        </section>
    );
}

export default Landing;