import { useLocation } from 'react-router-dom';
import AllRoutes from './AllRoutes/AllRoutes';
import './App.css';
import Navbar from './Components/Navbar';


function App() {
const location = useLocation();

const isAdminRoute = location.pathname === '/admin';

  return (
    <div className="App">
 {!isAdminRoute && <Navbar />}
      <AllRoutes isAdminRoute={isAdminRoute} />
  </div>
  );
}

export default App; 
