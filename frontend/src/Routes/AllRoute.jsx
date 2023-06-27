
import { Route, Routes } from 'react-router-dom';
import GetStartedForm from '../kaizenConsultancy/Pages/GetStartedForm';
import Home from '../kaizenConsultancy/Pages/Home';
import HowitWorks from '../kaizenConsultancy/Components/HowitWorks';
import Feature from '../kaizenConsultancy/Components/Feature';
import ContactPage from '../kaizenConsultancy/Pages/ContactPage';
import ContactsData from '../kaizenConsultancy/Admin-Section/ContactsData';
import GenralFormData from '../kaizenConsultancy/Admin-Section/GenralFormData';
import Login from '../kaizenConsultancy/Admin-Section/Login';
import AdminHome from '../kaizenConsultancy/Admin-Section/AdminHome';
import PrivcyPolices from '../kaizenConsultancy/Pages/PrivcyPolices';
import Cards from '../Components/Cards';
import Hero from '../Codeverse/Components/Hero';


const AllRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/genral-5" element={<GetStartedForm />} />
        {/* <Route path="/home" element={<Home />} /> */}
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
        <Route path="/privacy-policy" element={<PrivcyPolices />} />

        <Route path="/" element={<Cards/>} />
        <Route path="/Kaizen-solutions" element={<Home/>} />
        <Route path="/Kaizen-kids" element={<Hero/>} />
      </Routes>
            
     
      
    </div>
  );
}

export default AllRoutes;
