import logo from '../assets/images/Logo_North-01.png';

const Contact = () => {
    return (
        <section style={{ paddingBottom: '10vh'}} className="contact-section flex justify-between">
            <div className="column-1 flex">
                <div className="image-area">
                    <img src={logo} alt="North Logo" height="140px" width="140px" />
                </div>
                <div className="text-area">
                    <p>+977 9860242823</p>
                    <p>northrooftop@gmail.com</p>
                    <div className="socials flex column">
                        <span><b>Facebook</b></span>
                        <span className="my-sm"><b>Instagram</b></span>
                    </div>
                </div>
            </div>

            <div className="column-2 flex column">
                <div className="small-title">Contact Us</div>
                <div className="paragraph">
                    <p style={{ width: '20vw' }}>
                        Talk to us to organize birthday parties and make special reservations! Leave your email and we’ll get back to you.
                    </p>
                    <form>
                        <div className="form flex">
                            <input className="input" type="email"/>
                            <button className="btn primary ml-md">CONNECT</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;