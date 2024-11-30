# webpack 搭建全栈项目

在开发上，我们可以将客户端和服务端分开不同的工程中进行开发。
也可以将客户端和服务端都放在同一个工程中，通过 webpack 构建。

这里就是将客户端代码和服务端代码放在一个工程中，使用 webpack 来统一进行构建。

## 目录分析

```sh
client    # 客户端代码
server      # 服务端代码
common      # 公共代码
package.json    # 包管理文件
webpack.config.js   # webpack 配置文件
```

dist 目录分析:
我们希望的是客户端代码打包后的文件，和服务端代码打包后的文件，放在同一个目录下。客户端放在 public 目录下

```sh
public  # 客户端代码打包后的文件
    css
    index.html
    style.css
    index.js
index,js    # 服务端代码打包后的文件
```

## 开发环境和生产环境

在 package.json 文件中已经内置好了脚本,开发环境下我们执行:`pnpm run dev`
生产环境执行:`pnpm run build`
package.json

```json
  "scripts": {
    "dev": "npm-run-all -p dev:server dev:client",
    "dev:server": "nodemon --watch server --exec 'npm run dev:server:build && npm run dev:server:exec'",
    "dev:server:build": "cross-env NODE_ENV=development webpack",
    "dev:server:exec": "node dist/index",
    "dev:client": "cd client && npm run serve",

    "build": "npm-run-all -s build:server build:client",
    "build:server": "cross-env NODE_ENV=production webpack",
    "build:client": "cd client && npm run build"
  },
```

注意:
这里使用了一个 npm-run-all 插件，用来同时执行多个命令。

```sh
npm-run-all -p # 同时执行多个命令
npm-run-all -s # 依次执行多个命令
```

## 项目地址

[fullstack-webpack](https://github.com/ZongYan30/fullstack-webpack)
