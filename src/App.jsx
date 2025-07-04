import './css/index.css';
import './css/App.css';

import Navbar from "./components/Navbar.jsx";
import TopCarousel from './components/TopCarousel.jsx';
import AboutSection from './components/AboutSection.jsx';
import TeamSection from './components/TeamSection.jsx';
import Opportnities from './components/OpportunitiesSection.jsx';
import FieldSection from './components/FieldSection.jsx';
import AdmissionSection from './components/AdmissionSection.jsx';
import ProgramSection from './components/ProgramSection.jsx';
import TechnoSection from './components/TechnoSection.jsx';
import Partenaire from './components/Partenaire.jsx'
import Footer from './components/Footer.jsx'

function App() {
    return (
        <>
            <Navbar />
            <TopCarousel pageCount={3} />
            <AboutSection />
            <TeamSection />
            <Opportnities />
            <FieldSection />
            <AdmissionSection />
            <ProgramSection />
            <TechnoSection />
            <Partenaire />
            <Footer />
        </>
    )
}

export default App