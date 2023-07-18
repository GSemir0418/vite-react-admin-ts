import { Outlet, createHashRouter } from 'react-router-dom'
import { Button } from 'antd'

export const routes = [
  {
    path: '/',
    element: <div>MainLayout <Outlet/></div>,
    children: [
      {
        path: '11',
        children: [
          { path: '22', element: <><Button>11</Button></> },
          { path: '33', element: <>33</> },
        ],
      },
    ],
  },
]

export const router = createHashRouter(routes)
