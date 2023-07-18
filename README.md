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
