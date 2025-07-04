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

function App() {
    return (
        <>
            <Navbar />
            <TopCarousel pageCount={3}/> {/* Need to fix carousel in topCarouselElement.jsx */}
            <AboutSection />
            <TeamSection /> {/* Need to fix carousel in teamCardList.jsx */}
            <Opportnities />
            <FieldSection />
            <AdmissionSection />
            <ProgramSection />
            <TechnoSection />
        </>
    )
}

export default App