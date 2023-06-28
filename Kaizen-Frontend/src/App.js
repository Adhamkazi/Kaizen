
// import './App.css';
// import Cards from './Components/Cards';
// import Footer from './Components/Footer';
// import Navbar from './Components/Navbar';
// import AllRoute from './Routes/AllRoute';

// function App() {
//   return (
//     <div className="App" style={{backgroundColor:"white"}} >  
//    <Navbar/>
//    {/* <Modal/> */}
//    {/* <Cards/> */}
//    <AllRoute/>
//    <Footer/>
//     </div>
//   );
// }

// export default App;


import { useLocation } from 'react-router-dom';
import AllRoutes from './Routes/AllRoute.jsx';
import './App.css';
// import Navbar from './Components/Navbar.jsx';


function App() {
const location = useLocation();

const isAdminRoute = location.pathname === '/admin';

  return (
    <div className="App">
 {/* {!isAdminRoute && <Navbar />} */}
      <AllRoutes isAdminRoute={isAdminRoute} />
  </div>
  );
}

export default App; 
