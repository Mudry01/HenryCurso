import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import characters, { Rick } from './data.js';

function App() {

   function searchHandler(e){ // Creamos la funcion fera del return 
      window.alert('El ID que estoy buscando'); // Hacemos una alerta y buscamos el ID
   }


   function closeHandler(){ // Creaamos la funcion cerrar cuando le damos a la x.
      window.alert('Emulamos que se cierra la card'); // Hacemos una alerta para saber si cerramos la carta
   }

   return (
      <div className='App'>
         <SearchBar onSearch={searchHandler}/> {/*La invocamos*/}
         <Cards characters={characters} onClose = {closeHandler}/> {/*La invocamos*/}
         {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> */}
      </div>
   );
}

export default App;
