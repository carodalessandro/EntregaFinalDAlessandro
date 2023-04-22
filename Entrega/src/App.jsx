import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/itemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer';

export function App() {
  return (
    <Router>
      <section className='container'>  
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:category' element={<ItemListContainer/>}/>
            <Route path='/item/:pid' element={<ItemDetailContainer/>} />
         </Routes>
      </section>
    </Router>  
  );
};

