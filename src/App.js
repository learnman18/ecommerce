import React from 'react';
import './App.css';
import { Route , Routes } from 'react-router-dom';
import MenuBar from './components/menubar/MenuBar';
import LandingPage from './components/HomePage/LandingPage';
import ProductSpecification from './components/ProdcutsInfo/ProductDetails';
import Cart from './components/ProdcutsInfo/Cart';

function App() {
  return (
    <>
      <MenuBar></MenuBar>
      <Routes>
        <Route path='/' element={
            <div className='ecommerce container' style={{paddingTop:"100px"}}>
                <LandingPage></LandingPage>
            </div>
          }>
        </Route>
        <Route path='products'></Route>
        <Route path='selectedProdcuts/:productName' element={<ProductSpecification></ProductSpecification>}></Route>
        <Route path='cart' element={<Cart></Cart>}></Route>
      </Routes>
    </>
  );
}

export default App;
