import React from 'react'
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'

function App() {
  console.log('render de App')

  return (
    <div className="App">
        <NavBar /> 
        <ItemListContainer greeting={"Bienvenidos a mi Ecommerce"}/>
    </div>
  );
}

export default App;
