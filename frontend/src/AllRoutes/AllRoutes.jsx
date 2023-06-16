import { Route, Routes } from 'react-router-dom';
import GetStartedForm from '../Pages/GetStartedForm';
import Home from './../Pages/Home';
import HowitWorks from './../Components/HowitWorks';
import Feature from './../Components/Feature';
import ContactPage from '../Pages/ContactPage';
import ContactsData from '../Admin-Section/ContactsData';
import GenralFormData from '../Admin-Section/GenralFormData';
import Login from '../Admin-Section/Login';
import AdminHome from '../Admin-Section/AdminHome';
// import AdminHome from './../Admin-Section/AdminHome';..


const AllRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/genral-5" element={<GetStartedForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<HowitWorks />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/admin"
          element={<AdminHome  />}
       
        />
        <Route
          path="/contact-data"
          element={  <ContactsData />}
        
        />
        <Route
          path="/genralForm-data"
          element={ <GenralFormData />}
          
        />
        <Route path="/login" element={<Login />} />
      </Routes>
            
      
    </div>
  );
}

export default AllRoutes;
