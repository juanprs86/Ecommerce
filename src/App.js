import './components/NavBar/navbar.css';
import NavBar from './components/NavBar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
      const onAdd = (qty) => {
        alert(`Agregaste ${qty} productos`);
      };

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Lion instrumentos musicales" />
      <ItemCount onAdd={onAdd} initial={1} stock={12} />
    </> 
  );
}
  
  

export default App;
