import './App.css'
import React, { useState } from 'react';
import Form from './pages/Form';
import Login from './components/Login';
import { isAuthenticated } from './auth/keyphrase';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [isAuthenticatedState, setIsAuthenticatedState] = useState(
    isAuthenticated()
  );
  const [keyPhrase, setKeyPhrase] = useState("");


  return (
    <Router>
      <Routes>
      {isAuthenticatedState ? (
          <>
            <Route exact path="/" element={<Form />} />
          </>
        ) : (
          <>
          <Route exact path="/" element={<Login 
          setIsAuthenticatedState={setIsAuthenticatedState}
          keyPhrase={keyPhrase}
          setKeyPhrase={setKeyPhrase}
          />} />
        </>
        )}
      </Routes>
    </Router>
  )}

export default App