import './css/index.css';
import './css/App.css';

import Navbar from "./components/navbar.jsx";
import TopCarouselElement from './components/topCarouselElement.jsx';
import AboutSection from './components/aboutSection.jsx';
import TeamSection from './components/teamSection.jsx';
import Opportnities from './components/opportunitiesSection.jsx';
import FieldSection from './components/fieldSection.jsx';
import AdmissionSection from './components/admissionSection.jsx';
import ProgramSection from './components/programSection.jsx';

function App() {
    return (
        <>
            <Navbar />
            <TopCarouselElement /> {/* Need to fix carousel in topCarouselElement.jsx */}
            <AboutSection />
            <TeamSection /> {/* Need to fix carousel in teamCardList.jsx */}
            <Opportnities />
            <FieldSection />
            <AdmissionSection />
            <ProgramSection />
        </>
    )
}

export default App