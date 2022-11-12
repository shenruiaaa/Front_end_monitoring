import Admin from '../containers/admin/admin'
import Login from '../containers/login/login'
import { Navigate } from 'react-router-dom'
import Home from '../components/home/home'

import Pv from '../containers/PV/pv'
import Error from '../containers/error/error'
import Performance from '../containers/performance/performance';

export default [
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/admin',
        element: <Admin />,
        children: [
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'pv',
                element: <Pv />
            },
            {
                path: 'error',
                element: <Error />
            },
            {
                path: 'performance',
                element: <Performance />
            }

        ]
    },
    {
        path: '/',
        element: <Navigate to="/admin" />
    }
]