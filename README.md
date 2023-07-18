> https://cn.vitejs.dev/guide/
创建项目
pnpm create vite

配置eslint
> https://github.com/antfu/eslint-config
pnpm add -D @antfu/eslint-config
修改eslintrc
extends: '@antfu',
parserOptions: {
  ...
  // project: true,
},
安装 eslint 插件，vscode配置
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true,
  "source.fixAll": true
},

react router 6
> https://reactrouter.com/en/main/start/tutorial
pnpm add react-router-dom
创建router
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
引入 router
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

less
pnpm add less

alias
pnpm add -D @types/node
"baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },

    resolve: {
    alias: { '@': path.resolve(__dirname, './src/') },
  },

