import { Outlet, createHashRouter } from 'react-router-dom'

export const router = createHashRouter([
  {
    path: '/',
    element: <div>MainLayout <Outlet/></div>,
    children: [
      {
        path: '11',
        children: [
          { path: '22', element: <>22</> },
          { path: '33', element: <>33</> },
        ],
      },
    ],
  },
])
