import './App.css';
import { Route , Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Wishlist from './Pages/Wishlist';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/wishlist' element={<Wishlist/>}/>
      </Routes>
      <Footer/>
    </div>


    </>
  );
}

export default App;
