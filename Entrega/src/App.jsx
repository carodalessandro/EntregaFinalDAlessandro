import './App.css'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/itemListContainer'

export function App() {
  return (
  <section className='container'>  
      <NavBar />
      <ItemListContainer props='Saludo' />
  </section>  
  );
};

