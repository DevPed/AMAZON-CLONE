import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div className='grid-container'>
        <header className='row'>
          <div>
            <a className='brand' href='/'>
              Ecommerce
            </a>
          </div>
          <div>
            <a href='/cart'>Cesta</a>
            <a href='/signin'>Ingrese</a>
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path='/product/:id' component={ProductScreen}></Route>
          <Route path='/' component={HomeScreen} exact></Route>
        </main>
        <footer className='row center'>Todos los derechos reservados</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
