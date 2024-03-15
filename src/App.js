
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layout/header';
import Board from './board/Board';
import Home from './home';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      
        <Header/>

        <Routes>

          <Route path='/' element={<Home/>}></Route>
          <Route path="/board/list" element={<Board/>}></Route>

        </Routes>
        
      </BrowserRouter>

    </div>

    

  );
}

export default App;
