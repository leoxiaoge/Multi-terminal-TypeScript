# Multi-terminal

多端应用

# 1.通过命令安装vue-cli（脚手架）

如果你使用vue-cli脚手架来构建vue项目，那么你只需敲击下面5行命令即可生成一个简单的vue项目（前提安装node.js）：

```shell
npm install -g vue-cli

vue init webpack my-project

cd my-project

npm install

npm run dev
```

├── build // webpack/node配置文件
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config // 环境配置文件
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
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
├── .gitignore // gitignore忽略文件
├── .editorconfig // 编码风格配置文件
├── .postcssrc.js // postcss配置文件
├── package.json // node包管理文件
├── index.html // 首页模板
├── package.json // 包管理文件
└── README.md // 描述文件
