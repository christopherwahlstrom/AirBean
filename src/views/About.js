import  './About.css';
import CeoImage from '../graphics/eva-cortado.jpg';
import HeaderAbout from '../components/HeaderAbout';
import Footer from '../components/Footer';

const About = () => {
    return (
        <article>
            <HeaderAbout />
            <section className="about">
                <h1> Vårt Kaffe </h1>
                <p className='bold'>Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.</p>
                <br></br>
                <p>Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato. So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.<br /><br />Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny crema.</p>
                <section className='founderContainer'>
                    <img src={ CeoImage } alt="CEO" />
                    <h3>Eva Cortado</h3>
                    <p className='title'>VD och Grundare</p>
                </section>
            </section>
            <Footer />
        </article>

    )

}
export default About;
