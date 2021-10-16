import { useState } from 'react';
import img1 from '../assets/images/devesh.png'
import img2 from '../assets/images/shrawak.png';

const About = () => {

    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);

    return (
        <section className="about-section flex justify-center mt-xl" style={{ marginTop: '20vh'}}>
            <div className="text-area" style={{ width: '40vw' }}>
                <div className="small-title text-primary">About North</div>
                <div className="paragraph">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
            <div className="image-area ml-xl">
                <div className="row flex justify-between">
                    <div
                        onMouseOver={() => setIsHovered1(true)}
                        onMouseOut={() => setIsHovered1(false)}
                        className="img-1 about-image" style={{ position: 'relative' }}>
                        <div className={`name ${isHovered1 ? "show-name" : "hide-name"}`} style={{ position: 'absolute', zIndex: '2', bottom: '1em', left: '1ch' }}>
                            Devesh Bajracharya
                        </div>
                        <img src={img1} alt="Food" style={{ borderRadius: '30px 0 0 0' }} width="200px" />
                    </div>
                    <div
                        onMouseOver={() => setIsHovered2(true)}
                        onMouseOut={() => setIsHovered2(false)}
                        className="img-2 about-image" style={{ position: 'relative' }}>
                        <div className={`name ${isHovered2 ? "show-name" : "hide-name"}`} style={{ position: 'absolute', zIndex: '2', bottom: '1em', left: '1ch' }}>
                            Shrawak Bajracharya
                        </div>
                        <img src={img2} alt="Food" style={{ borderRadius: '0 30px 0 0' }} width="200px" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;