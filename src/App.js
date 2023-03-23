import React from 'react'
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  console.log('render de App')

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar /> 
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a mi Ecommerce"}/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Productos Filtrados"}/>}/>
          <Route path='/item:itemId' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
