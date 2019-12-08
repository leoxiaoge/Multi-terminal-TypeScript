# Multi-terminal

## 1.通过命令安装vue-cli（脚手架）

如果你使用vue-cli脚手架来构建vue项目，那么你只需敲击下面5行命令即可生成一个简单的vue项目（前提安装node.js）：

https://vuejs-templates.github.io/webpack

```shell
npm install -g vue-cli

vue init webpack my-project

cd my-project

npm install

npm run dev
```

```shell
├── build // webpack/node配置文件
│   ├── miniprogram.config.js  // mp-webpack-plugin配置
│   ├── webpack.mp.config.js   // 小程序端构建配置
│   ├── build.js  // build构建配置
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── vue-loader.conf.js // vue-loader构建配置
│   ├── webpack.base.conf.js // Web端构建基础配置
│   ├── webpack.dev.conf.js // Web端构建开发环境配置
│   └── webpack.prod.conf.js // Web端构建生产环境配置
├── config // 环境配置文件
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── docs // 文档
├── node_modules // npm包文件
├── src // 静态资源文件
│   ├── assets
│   │    └── logo.png
│   ├── components 
│   │    └── Hello.vue 
│   ├── router
│   │    └── index.js 
│   ├── App.vue 
│   └── main.js
├── static
├── .babelrc // babel配置文件
├── .editorconfig // editor配置文件
├── .eslintignore // eslint忽略文件
├── .eslinttrc // eslint配置文件
├── .gitignore // gitignore忽略文件
├── .editorconfig // 编码风格配置文件
├── .postcssrc.js // postcss配置文件
├── package.json // node包管理文件
├── index.html // 首页模板
├── package.json // 包管理文件
└── README.md // 描述文件
```

## 2.构建Electron应用

Electron(https://electron.atom.io)

main.js Electron入口文件

```
全局安装
npm install -g electron
```

```
局部安装
npm i -D electron@latest
yarn add electron@latesti --dev

# Electron 7.1.2
# Node 12.8.1
# Chromium 78.0.3904.113
```
