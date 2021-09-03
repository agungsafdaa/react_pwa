import React from 'react';
import Arrived from './components/Arrived';
import Asidemenu from './components/Asidemenu';
import Browse from './components/Browse';
import Client from './components/Client';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
   <>
    <Header/>
    <Hero/>
    <Browse/>
    <Arrived/> 
    <Client/> 
    <Asidemenu/>
    <Footer/>
   </>
  );
}

export default App;
