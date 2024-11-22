import ContactPage from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";



export default function Home() {
  return (
  <div>
    <Navbar/>
<Hero/>
<Menu/>
<ContactPage/>
<Footer/>
  </div>
  );
}
