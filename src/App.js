import './components/NavBar/navbar.css';
import NavBar from './components/NavBar/navbar';
import ItemListContainer from './components/NavBar/ItemListContainer';

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Lion instrumentos Musicales" />
    </> 
  );
}
  
  

export default App;
