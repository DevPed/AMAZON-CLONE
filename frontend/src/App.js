import React from 'react';
import Product from './components/Product';
import data from './data';
function App() {
  return (
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
        <div className='row center'>
          {data.products.map(product => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </main>
      <footer className='row center'>Todos los derechos reservados</footer>
    </div>
  );
}

export default App;
