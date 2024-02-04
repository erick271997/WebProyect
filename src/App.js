
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './Estilos/App.css';
import './Estilos/medisScreen.css'
import About from './Pages/About';
import Home from './Pages/Home';
import Portafolio from './Pages/Portafolio';

function App() {
  return (
    <>
<BrowserRouter>
<Routes>
  <Route index element={<Home/>}>
  </Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/portafolio' element={<Portafolio/>}></Route>
</Routes>
</BrowserRouter>

  </> 
  );
}

export default App;
