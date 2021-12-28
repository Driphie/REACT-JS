import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemListContainer2 from './components/ItemListContainer2';
import bg1 from './images/bg1.jpeg'
import bg2 from './images/bg2.jpeg'
function App() {
  return (
      <div className="App">
        <h1 className="Main-tittle"><a href="#">FOOD & DRINKS</a></h1>
        <NavBar/>
        <ItemListContainer/>
        <div className="wrapper">
          <ItemListContainer2 img={bg1} tittle="F&D Simple + Papas Fritas" desc="Medallon x1 Cheddar Fetas x2 Bacon Cebolla Crispy Aderezo F&D" price="$ 900"/>
          <ItemListContainer2 img={bg2} tittle="F&D Sweet Onion Simple + Papas Fritas" desc="Medallon x1 Cheddar Fetas x2 Bacon Cebolla Caramelizada" price="$ 900"/>
        </div>
      </div>
  );
}

export default App;
