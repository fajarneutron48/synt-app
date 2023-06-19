import {Routes, Route} from 'react-router-dom'

import Dashboard from '../views/Dashboard'

function RouteIndex(){
    return(
        <Routes>
            <Route path='/' element={<Dashboard />} />
        </Routes>
    )
}

export default RouteIndex