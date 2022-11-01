import './App.css';
import Nav from './components/Nav';
import Store from './components/Store';
import Calcul from './components/Calcul';
import { Routes, Route } from 'react-router-dom'
import Routers from './components/Routers';
import { Course } from './components/Card';
import HookSet from './components/HookSet';
function App() {
  return (
    <div className="App">
    <Nav></Nav>  
    <Routes>
      <Route path="Home" element={<HookSet/>}></Route>
    </Routes>
    <Calcul></Calcul> 
{/* <Course></Course>  */}

    </div>
  );
}

export default App;



