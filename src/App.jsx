import './css/index.css';
import './css/App.css';

import Navbar from "./components/navbar.jsx";
import TopCarousel from './components/TopCarousel.jsx';
import AboutSection from './components/aboutSection.jsx';
import TeamSection from './components/teamSection.jsx';
import Opportnities from './components/opportunitiesSection.jsx';
import FieldSection from './components/fieldSection.jsx';
import AdmissionSection from './components/admissionSection.jsx';
import ProgramSection from './components/programSection.jsx';
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