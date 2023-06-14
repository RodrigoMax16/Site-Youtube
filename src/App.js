import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserStorage } from './contexts/userContext';

import Home from './pages/home';
import Musica from './pages/musica';
import Envios from './pages/envios';
import Login from './pages/login';
import Shorts from './pages/shorts';
import Cadastro from './pages/cadastro';
import Pesquisa from './pages/pesquisa';

function App() {


  return (
    <BrowserRouter>
      <UserStorage>
          <div className="App">
              <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/shorts' element={<Shorts />}/>
                <Route path='/music' element={<Musica />}/>
                <Route path='/envios' element={<Envios />}/>
                <Route path='/sign-in' element={<Login />}/>
                <Route path='/sign-up' element={<Cadastro />}/>
                <Route path='/search' element={<Pesquisa />}/>
              </Routes>

          </div>
      </UserStorage>
    </BrowserRouter>
    
  );
}

export default App;
