import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePg from './components/WelcomePg';
import PickCard from './components/PickCard';
import Eliminate from './components/Eliminate';
import GameSetup from './components/GameSetup';
import PointsTable from './components/PointsTable';
import { GlobalProvider } from './components/GlobalContext';
import AboutGame from './components/AboutGame';


function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>  
     
    
        <GlobalProvider>
        <div className="container" >
          <Routes>
            <Route path="/NewGame" element={<WelcomePg/>}>
            </Route>
            <Route path="/PickCard" element={<PickCard/>}>
            </Route>
            <Route path="/Eliminate" element={<Eliminate/>}>
            </Route>
            <Route path="/" element={<GameSetup />}>
            </Route>
            <Route path="/Points" element={<PointsTable/>}>
            </Route>
            {/* <Route path="/AboutGm" element={<AboutGame/>}>
            </Route>     */}

          </Routes>
          </div>

          <Routes>
          <Route path="/AboutGm" element={<AboutGame/>}>
            </Route>    

          </Routes>
          </GlobalProvider>
          <Routes>
    <Route path="/AboutGm" element={<AboutGame />} />
  </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
