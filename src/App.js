
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Cart from './pages/Cart';
import Home from './pages/Home';
import Wishlist from './pages/Wishlist';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
     <Header/>
     
      <Routes>

        <Route path='/'element={ <Home/>}/>
        <Route path='/cart'element={ <Cart/>} />
        <Route path='/wishList'element={ <Wishlist/>} />
        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
