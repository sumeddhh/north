import img1 from '../assets/images/image-1.jpg';
import img2 from '../assets/images/image-2.jpg';
import img3 from '../assets/images/image-3.jpg';
import img4 from '../assets/images/image-4.jpg';
import TypeAnimation from 'react-type-animation';

const Landing = () => {
  return (
    <section className="landing-section flex mt-xl justify-center">
      <div className="image-area">
        <div className="row-1 pb-lg">
          <div className="img-1" >
            <img className="hoverable" src={img1} alt="Food" style={{ borderRadius: '25px 25px 0 0' }} />
          </div>
        </div>
        <div className="row-2 flex justify-between">
          <div className="img-2">
            <img className="hoverable" src={img2} alt="Food" style={{ borderRadius: '0 0 10px 10px' }} />
          </div>
          <div className="img-3">
            <img className="hoverable" src={img3} alt="Food" style={{ borderRadius: '0 0 10px 10px' }} />
          </div>
        </div>
      </div>
      <div className="text-area flex column justify-center" style={{ width: '36%', marginLeft: '5vw' }}>
        <div className="title text-primary" style={{ lineHeight: '3.8rem', minHeight:'15vh' }}>
          <TypeAnimation
            cursor={true}
            sequence={[
              'A thousand flavors in one place',
              2000,
              'Made with love',
              2000,
            ]}
            wrapper="a"
            repeat={Infinity}
          />
        </div>
        <div className="sub-title text-light mt-sm" style={{ color: '#FEFEFE', fontSize: '1.5rem' }}>On top of Chandrayan Sweets</div>

        <div className="action-area flex" style={{ marginTop: '3.6rem' }}>
          <div className="serving">
            <div className="header" style={{ fontSize: '1.2rem' }}>WE'RE SERVING NOW</div>
            <div className="sub-header mt-sm" style={{ color: '#B2B2B2' }}>10:00 AM to 9:00 PM</div>
            <div className="serving-image mt-md">
              <img src={img4} alt="Food" style={{ borderRadius: '0 40px 0 40px', objectFit: 'cover', height: '160px', width: '240px' }} />
            </div>
          </div>

          <div className="booking ml-xl">
            <div className="header" style={{ fontSize: '1.2rem' }}>BOOK YOUR TABLE</div>
            <div className="sub-header mt-sm" style={{ color: '#B2B2B2' }}>Call +977 9860242823</div>
            <button className="btn primary mt-md">MAKE A RESERVATION</button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Landing;