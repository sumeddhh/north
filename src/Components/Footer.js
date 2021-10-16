const Footer = () => {
    return (
        <footer className="flex justify-between action-area" style={{background:'#181818', padding:'2vh 18.6vw', boxShadow:'0px -10px 40px #00000005'}}>
            <div className="copyright flex items-center">
                Copyright 2021, North Rooftop Restaurant
            </div>
            <div className="author flex column">
                <div className="label">Made By</div>
                <div className="h3 bold">Sumedh Bajracharya</div>
            </div>
        </footer>
    )
}
export default Footer;