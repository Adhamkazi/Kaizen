import { Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const AdminHome = () => {
  return (
    <div>
       <Link to="/contact-data" > <Button>Contact Data</Button></Link>
      <Link to="/genralForm-data" >  <Button>Genral Form  Data</Button></Link>
    </div>
  );
}

export default AdminHome;
