import './App.css';
import NavBar from './components/NavBar';
import ItemListTittle from './components/ItemListTittle';
import ItemListContainer from './components/ItemListContainer';
function App() {
  return (
      <div className="App">
        <h1 className="Main-tittle"><a href="app.js">FOOD & DRINKS</a></h1>
        <NavBar/>
        <ItemListTittle/>
          <ItemListContainer />
      </div>
  );
}

export default App;
