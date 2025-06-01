import React from 'react';
import {Header} from '../components/Header/Header.jsx';
import {IMAGES} from '../utils/constants.jsx';
import { Main } from '../components/Main/Main.jsx';
import { Footer } from './Footer/Footer.jsx';






export default function App() {
  
  return (
    <>
      <div className="page">
            <Header></Header>
            <Main></Main>
            <Footer></Footer> 
        </div>
    </>
  )
}


