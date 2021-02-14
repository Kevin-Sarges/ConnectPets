import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Nav from './components/NavBar';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';

function App() {
  return (
    <Router>
      <Nav/>
      <Routes/>
      <GlobalStyles/>
    </Router>
  );
}

export default App;
