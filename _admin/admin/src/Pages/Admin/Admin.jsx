import React from 'react'
import './Admin.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import {Routes, Route} from 'react-router-dom';
import AddProducr from '../../Components/AddProduct/AddProducr';
import ListProduct from '../../Components/ListProduct/ListProduct';
const Admin = () => {
  return (
    <div className='admin'>
        <Sidebar/>
        <Routes>
            <Route path='/addproduct' element={<AddProducr/>}/>
            <Route path='/listproduct' element={<ListProduct/>}/>
        </Routes>
    </div>
  )
}

export default Admin
