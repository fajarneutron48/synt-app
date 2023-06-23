import {Routes, Route} from 'react-router-dom'

import Dashboard from '../views/Dashboard'

import ProductCollection from '../views/products/ProductCollection'

import ProductSingle from '../views/products/ProductSingle'

function RouteIndex(){
    return(
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/products' element={<ProductCollection />} />
            <Route path='/products/new' element={<ProductSingle />} />
        </Routes>
    )
}

export default RouteIndex