import './App.css';
import Container from 'react-bootstrap/Container';
import React from 'react';

import MyflixNg from './components/projects/myflix-ng';
import MyflixReact from './components/projects/myflix-rt';
import MeetView from './components/projects/meet';
import PokedexView from './components/projects/pokedex';
import ChatView from './components/projects/chat';
import ZenithView from './components/projects/zenith';
import PluribusView from './components/projects/pluribus';
import PortfolioView from './components/projects/portfolio';
import DesignView from './components/design-view/design';
import ContactView from './components/contact-view/contact-view';

import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';

import MainView  from "./components/main-view/main-view.jsx";
import AboutView from './components/about-view/about-view';

function App() {
  return (
      <div className="App">

        <BrowserRouter>
          {/* <Container>
            <MainView />
          </Container> */}

          <Routes>
            <Route path="/" element={<MainView />} />
            <Route path="/about" element={<AboutView />} />
            <Route path="/contact" element={<ContactView />} />
            <Route path="/myflix-ng" element={<MyflixNg />} />
            <Route path="/meet" element={<MeetView />} />
            <Route path="/pokedex" element={<PokedexView />} />
             <Route path="/myflix-rt" element={<MyflixReact />} />
            <Route path="/chat" element={<ChatView />} />
            <Route path="/zenith" element={<ZenithView />} />
            <Route path="/pluribus" element={<PluribusView />} />
            <Route path="/design" element={<DesignView />} />
            <Route path="/portfolio" element={<PortfolioView />} />
          </Routes>

        </BrowserRouter>
      </div>
  );
}

export default App;
