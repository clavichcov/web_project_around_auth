import React, { useState, useEffect } from 'react';
import {Header} from '../components/Header/Header.jsx';
import {IMAGES} from '../utils/constants.jsx';
import { Main } from '../components/Main/Main.jsx';
import { Footer } from './Footer/Footer.jsx';
import { apiAcces } from '../utils/Api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
  apiAcces.getUserInfo()
    .then(setCurrentUser)
    .catch(console.error);
}, []);
  return (
    <>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <div className="page">
            <Header></Header>
            <Main></Main>
            <Footer></Footer> 
        </div>
      </CurrentUserContext.Provider>
    </>
  )
}


