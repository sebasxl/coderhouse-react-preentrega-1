import './App.css';
import 'bulma/css/bulma.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer titulo="Bienvenido al Ecommerce 3.0" />
    </div>
  );
}

export default App;
