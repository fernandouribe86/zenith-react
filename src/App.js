import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';

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
