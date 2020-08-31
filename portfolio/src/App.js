import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navigation'
import Banner from './components/Banner'
import SkillsSection from './components/SkillsSection'
import WorkExpSection from './components/WorkExpSection'
import ProjectSection from './components/ProjectSection'
import ContactSection from './components/ContactSection'
import Footer from './components/primitives/Footer'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faDownload, faChevronDown, faDatabase, faCrown } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faEnvelope, faDownload, faChevronDown, faDatabase, faCrown)

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Banner/>
      <SkillsSection id="skills"/>
      <WorkExpSection id="workexp"/>
      <ProjectSection id="projects"/>
      <ContactSection id="contact"/>
      <Footer/>
    </div>
  );
}

export default App;
