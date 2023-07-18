import { Outlet, createHashRouter } from 'react-router-dom'
import { Button } from 'antd'
import { MaterialPage } from '@/pages/material'

export const routes = [
  {
    path: '/',
    element: <div>MainLayout <Outlet/></div>,
    children: [
      {
        path: '11',
        children: [
          { path: '22', element: <><Button>11</Button></> },
          { path: '33', element: <MaterialPage/> },
        ],
      },
    ],
  },
]

export const router = createHashRouter(routes)
