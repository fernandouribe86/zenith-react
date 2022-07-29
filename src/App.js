import './App.css';
import Container from 'react-bootstrap/Container';
import React from 'react';


import {Routes, Route, useNavigate} from 'react-router-dom';

import myFlixNg from './components/myflix-ng/myflix-ng';

// import 'bootstrap/dist/css/bootstrap.min.css';

import MainView  from "./components/main-view/main-view.jsx";

function App() {
  return (
      <div className="App">
        <Container>
          <MainView />
        </Container>
      </div>
  );
}

export default App;
