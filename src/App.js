import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ProductCategory from './Pages/ProductCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/mens' element={<ProductCategory category="men" />} />
        <Route path='/women' element={<ProductCategory category="women" />} />
        <Route path='/kids' element={<ProductCategory category="kid" />} />
        <Route path='/product' element={<Product/>}>
         <Route path=':productId' element={<Product/>} />
        </Route>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<LoginSignup/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
