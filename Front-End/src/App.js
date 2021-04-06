import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import GlobalStyles from './styles/GlobalStyles';
import PreLoader from './components/PreLoader';
import Routes from './routes';

function App() {
	const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  });

  return (
    <>
      { loading && <PreLoader /> }
      { !loading &&   
        <Router>
          <Header/>
          <Routes/>
          <GlobalStyles/>
        </Router>
      }
    </>
  );
}

export default App;
