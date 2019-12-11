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

构建应用
```
vue init simulatedgreg/electron-vue my-project
```

打包发布有两种方式：

electron-packager，打包方式比较简单，想为哪个平台打包，执行相应命令即可。

electron-builder，自动化部署，持续集成，只要监测到 github 上绑定的代码仓库发生了变化，即可打包发布。

```
"scripts": {
    "electron": "electron .",
    "packager": "electron-packager ."
  },
"devDependencies": {
    "electron": "^7.1.3",
    "electron-packager": "^14.1.1",
}
```
1.electron-packager打包官方基本命令
```
electron-packager <sourcedir> <appname> --platform=<platform> --arch=<arch> [optional flags...]
```

命令说明： 
* sourcedir：项目所在路径 
* appname：打包的项目名字 
* --platform=<platform>：确定了你要构建哪个平台的应用（Windows、Mac 还是 Linux） 
* --arch=<arch>：决定了使用 x86 还是 x64 还是两个架构都用 
* [optional flags...]：可选选项

2、首先在项目根目录下面的 package.json 里添加代码
(1).electron-packager
```
    "packager": "electron-packager ./app HelloWorld --all --out ./OutApp --version 1.4.0 --overwrite --icon=./app/img/icon/icon.ico"
    "electron": "electron .",
    "package": "npm run packageDarwin && npm run packageWin && npm run packageLinux",
    "packagerDarwin": "electron-packager . darwin --platform=darwin --arch=x64 --icon=favicon.icns --out=./dist --asar --app-version=1.0.0",
    "packagerWin": "electron-packager . win --platform=win32 --arch=x64 --icon=favicon.ico --out=./dist --asar --app-version=1.0.0",
    "packagerLinux": "electron-packager . linux --platform=linux --arch=x64 --icon=favicon.ico --out=./dist --asar --app-version=1.0.0"
```
(2).electron-builder
```
    "build": "node .electron-vue/build.js && electron-builder",
    "build:dir": "node .electron-vue/build.js && electron-builder --dir",
    "build:clean": "cross-env BUILD_TARGET=clean node .electron-vue/build.js",
    "build:web": "cross-env BUILD_TARGET=web node .electron-vue/build.js",
    "dev": "node .electron-vue/dev-runner.js",
    "e2e": "npm run pack && mocha test/e2e",
    "lint": "eslint --ext .js,.vue -f ./node_modules/eslint-friendly-formatter src test",
    "lint:fix": "eslint --ext .js,.vue -f ./node_modules/eslint-friendly-formatter --fix src test",
    "pack": "npm run pack:main && npm run pack:renderer",
    "pack:main": "cross-env NODE_ENV=production webpack --progress --colors --config .electron-vue/webpack.main.config.js",
    "pack:renderer": "cross-env NODE_ENV=production webpack --progress --colors --config .electron-vue/webpack.renderer.config.js",
    "test": "npm run unit && npm run e2e",
    "unit": "karma start test/unit/karma.conf.js",
    "postinstall": "npm run lint:fix"
```

使用命令运行调试
```
npm run electron
```

使用命令执行打包
```
npm run packager
```

主要事项：
1.配置PATH环境变量
2.Windows上不能打包mas或darwin平台应用
报错信息：
```
Cannot create symlinks (on Windows hosts, it requires admin privileges); skipping darwin platform
```
解决方法：
以管理员权限运行命令行窗口