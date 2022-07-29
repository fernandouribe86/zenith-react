import './App.css';
import Container from 'react-bootstrap/Container';
import React from 'react';

import MyflixNg from './components/myflix-ng/myflix-ng';

import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';

import MainView  from "./components/main-view/main-view.jsx";

function App() {
  return (
      <div className="App">

        <BrowserRouter>
          {/* <Container>
            <MainView />
          </Container> */}

          <Routes>
            <Route path="/myflix-ng" element={<MyflixNg />} />
            <Route path="/" element={<MainView />} />
          </Routes>

        </BrowserRouter>
      </div>
  );
}

export default App;
