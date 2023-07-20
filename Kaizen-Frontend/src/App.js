

import { useLocation } from 'react-router-dom';
import AllRoutes from './Routes/AllRoute.jsx';
import './App.css';


function App() {
const location = useLocation();

const isAdminRoute = location.pathname === '/admin';

  return (
    <div className="App"   >
 {/* {!isAdminRoute && <Navbar />} */}
      <AllRoutes isAdminRoute={isAdminRoute} />
  </div>
  );
}

export default App; 
