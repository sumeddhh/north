import logo from './assets/images/Logo_North-01.png';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Landing from './Components/Landing';
import Menu from './Components/Menu';

const NorthHome = () => {
  return (
    <>
      <main>
        <nav className="flex-centered py-lg">
          <img src={logo} alt="North Logo" height="100px" width="100px" />
        </nav>
        <Landing />
        <About />
        <Menu />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
export default NorthHome;
