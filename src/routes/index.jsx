
import { Navigate } from 'react-router-dom'
import Layout from '../components/clients/Layout/index'
import Dashboard from '../pages/Dashboard/index'
export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      // {
      //   index: true,
      //   element: <Blog />
      // },
      
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />
  }
]