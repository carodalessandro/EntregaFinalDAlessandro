import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/itemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { CartContext, CartContextProvider } from './context/CartContext';
import { CartContainer } from './components/CartContainer';

export function App() {
  return (
      <CartContextProvider>

        <Router>
          <section className='container'>  
              <NavBar />
              <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/category/:category' element={<ItemListContainer/>}/>
                <Route path='/item/:pid' element={<ItemDetailContainer/>} />
                <Route path='/Cartcontainer' element={<CartContainer/>} />

            </Routes>
          </section>
        </Router> 
        
      </CartContextProvider>
  );
};

