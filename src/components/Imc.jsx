import React, { useState } from 'react'

export default function Imc() {

const [peso, setPeso] = useState('');
const [altura, setAltura] = useState('');
const [resultado, setResultado] = useState('')

function calcular(e){
  e.preventDefault()
  let imc = peso / (altura * altura)
    let descricao; 
    setResultado(imc)
    
    if(imc < 18.5){
        descricao = "Abaixo do Peso"
    }else if (imc >= 18.5 && imc <= 24.99){
        descricao = "Eutrofia (Peso Adequado)"
    }else if(imc >25.0 && imc <= 29.99){
        descricao = "SobrePeso"
    }else if (imc >= 30.0 && imc <= 34.99){
        descricao = "Obesidade grau 1"
    }else if (imc >= 35.0 && imc <= 39.99){
        descricao = "Obesidade grau 2"
    }else if(imc > 40.0){
        descricao = "Obesidade extrema"
    }
    
    setResultado(`Seu IMC é: ${imc.toFixed(2)} - ${descricao}`);


}

  return (
    <div>
      <h2>IMC do usuario</h2>
      <form onSubmit={calcular}>
        <label>Peso: </label>
        <input type="number" 
        placeholder='Preencha o peso' 
        name="peso"
        onChange={(e)=>setPeso (e.target.value)}/>

        <label>Altura: </label>
        <input type="number" 
        placeholder='Preencha a Altura' 
        name="altura"
        onChange={(e)=>setAltura (e.target.value)}/>

        <button onClick={calcular}>Calcular IMC: </button>
        <p>{resultado}</p>


      </form>
        
    </div>
  )
}
