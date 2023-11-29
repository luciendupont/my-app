import Menu from './components/Menu';
import Home from './pages/Home';
import './css/app.css';
import TechnoAdd from './pages/TechnoAdd';
import TechnoList from './pages/TechnoList';



function App() {
  return (
    <>
   <Menu/>
   <Home />
   <TechnoAdd/>
   <TechnoList/>
   </>
  );
}

export default App;
