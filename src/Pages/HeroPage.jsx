import Button from "../Components/Button";
import ImageOne from "../assets/Images/client-databiz.svg";
import ImageTwo from "../assets/Images/client-audiophile.svg";
import ImageThree from "../assets/Images/client-meet.svg";
import ImageFour from "../assets/Images/client-maker.svg";
import HeroImage from "../assets/Images/image-hero-desktop.png";
import "./HeroPage.css"
const Hero = () => {
    return ( 
        <main>
            <sectionOne>
                <h1>Make <br /> remote work</h1>
                <p>Get your team in sync, no matter your location. <br />Streamline processes,create team rituals, and <br />and watch productivity soar</p>
                <Button/> <br />
                <heroImg>
                    <img src={ImageOne} alt="" />
                    <img src={ImageTwo} alt="" />
                    <img src={ImageThree} alt="" />
                    <img src={ImageFour} alt="" />
                </heroImg>
            </sectionOne>
            <img src={HeroImage} alt="" id="heroImage"/>
            
        </main>
     );
}
 
export default Hero;