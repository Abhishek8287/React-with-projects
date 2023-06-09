import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" Component={Landing} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
