import React from 'react'
import Imc from "./components/Imc";
import Header from './components/Header';
import Footer from './components/Footer';


export default function App() {
  return (
    <div>
      <h1>
        <Header/>
        <Imc/>
        <Footer/>
      </h1>
    </div>
  )
}
