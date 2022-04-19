import Header from "./components/header/Header";
import Navigation from "./components/nav/Navigation";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <>
            <Header/>
            <Navigation/>
            <main>
                <About/>
                <Experience/>
                <Services/>
                <Portfolio/>
                <Testimonials/>
                <Contacts/>
            </main>
            <Footer/>
        </>
    );
}

export default App;
