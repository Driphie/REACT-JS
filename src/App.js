import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
      <div className="App">
        <h1 className="Main-tittle"><a href="#">FOOD & DRINKS</a></h1>
        <NavBar/>
        <ItemListContainer/>
      </div>
  );
}

export default App;
