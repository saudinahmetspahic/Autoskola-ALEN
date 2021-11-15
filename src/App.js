import './App.css';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Autoskola from './components/Autoskola/Autoskola';
import Instruktor from './components/Instruktor/Instruktor';
import Kontakt from './components/Kontakt/Kontakt';
import Testovi from './components/Testovi/Testovi'
import Pocetna from './components/Pocetna/Pocetna';


function App() {

  return (
    <Router>
      <div className="app">
        <Navbar />
        {/* <Pocetna></Pocetna> */}
        <Routes>
            <Route path="/autoskola" element={<Autoskola />}></Route>
            <Route path="/instruktor" element={<Instruktor />}></Route>
            <Route path="/testovi" element={<Testovi />}>Testovi</Route>
            <Route path="/kontakt" element={<Kontakt />}>Kontakt</Route>
            <Route exact path="*" element={<Pocetna />}>Home</Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
