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

vite plugin
平台要求前端打包产物要根据路由结构生成文件夹及index.html
可以用脚本做，也可以自己写一个vite插件，在writeBundle时运行，读取路由列表，利用node生成各路由的html文件
"include": ["vite.config.ts", "src/plugins/*"]

 plugins: [react(), generateHtmlWithRoutes()],

 import fs from 'node:fs'
import path from 'node:path'

// 暂时手动维护一份路由表
const routes = [
  {
    path: 'basic-data',
    children: [
      { path: 'equip-manage' },
      { path: 'bom-manage' },
    ],
  },
  {
    path: 'daily-work',
    children: [
      { path: 'daily-work' },
    ],
  },
]
interface Options {
  outDir?: string
}
/*
* options: 目前仅支持 outDir 配置
* */
export default function generateHtmlWithRoutes(options: Options = {}) {
  const outputDir = options.outDir || 'dist'
  return {
    name: 'generateHtmlWithRoutes',
    apply: 'build' as any,
    writeBundle() {
      const sourceFile = path.join(outputDir, 'index.html')
      const makeDir = (url: string) => fs.mkdirSync(url, { recursive: true })
      const cpHtml = (target: string) => fs.copyFile(
        sourceFile,
        target,
        (err) => {
          if (err)
            throw err
        })
      // 按路由表生成文件夹并复制 html
      for (const m of routes) {
        if (m.children) {
          for (const m2 of m.children) {
            makeDir(path.join(outputDir, m.path, m2.path))
            cpHtml(path.join(outputDir, m.path, m2.path, 'index.html'))
          }
        }
        else {
          makeDir(path.join(outputDir, m.path))
          cpHtml(path.join(outputDir, m.path, 'index.html'))
        }
      }
    },
  }
}

antd
pnpm add antd
pnpm add @ant-design/pro-components

axios 封装
pnpm add axios
主要对于请求拦截（权限请求头）、响应拦截（导出excel）、请求方法（GET，POST）、错误处理等功能进行封装

tailwindcss
> https://tailwindcss.com/docs/guides/vite
pnpm add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

@tailwind base;
@tailwind components;
@tailwind utilities;

安装vscode插件 bradlc.vscode-tailwindcss
解决 less 报错：Unknown at rule @tailwindless(unknownAtRules)
setting 搜索 unknown
找到 LESS>Lint: Unknown At Rules，设置为 ignore 即可