import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Categories from '../Pages/categories/Categories';
import Home from '../Pages/Home/Home';
import Brands from '../Pages/Brands/Brands';
import Users from '../Pages/Users/Users';
import Products from '../Pages/Products/Product';
import HeaderTop from '../Pages/Header/Header'
import { CrudProvider } from '../Context/context';


const PrivateRoutes = () => {
    return (
        <>
            <CrudProvider>
                <HeaderTop>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/categories' element={<Categories />} />
                        <Route path='/brands' element={<Brands />} />
                        <Route path='/users' element={<Users />} />
                        <Route path='/products' element={<Products />} />
                    </Routes>
                </HeaderTop>
            </CrudProvider>

        </>

    );
}

export default PrivateRoutes;