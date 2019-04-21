# taro2

## 使用步骤：
 ### 1.git clone 项目git地址
 ### 2.确保已经全局安装了nodejs,npm,@tarojs/cli。没有的话命令行执行：
  npm install -g @tarojs/cli （或）yarn global add @tarojs/cli
 ### 3.命令行到当前项目目录下执行：
  npm install (或) yarn install
 ### 4.安装项目依赖完成后，执行 ：
  npm run dev:h5 (或) yarn run dev:h5
  可查看h5启动效果；
  想查看在微信小程序中项目展示将上面冒号后内容改为weapon，回车即可，
  但需要在小程序开发工具的项目路径位置选择项目中dist的目录
  
## 遇到的问题总结：
  ### 1.当我在另一台电脑上部署taro开发环境时，按上面的顺序执行后，启动h5开发环境报错，无法找不到taro-ui的loader。
  ``` ℹ️  Listening at http://127.0.0.1:10086/

监听文件修改中...

./node_modules/_taro-ui@2.1.0@taro-ui/dist/h5/components/countdown/index.js 105:11
Module parse failed: Unexpected token (105:11)
You may need an appropriate loader to handle this file type.
|     } = this.state;
|
>     return <View className={classNames({
|       'at-countdown': true,
|       'at-countdown--card': isCard
```
  
  
  
  按照官网的说明，查看了一下需要在config/index.js中配置如下代码：
     `h5: {
      esnextModules: ['taro-ui']
    }`
然而并没有起任何作用，万般无奈下去查了下taro-ui的issue里面。总于发现这个是因为使用不同的包管理器，导致的taro-ui安装目录不同，
所以才会继续报错，详细内容请看：

https://github.com/NervJS/taro/issues/2224

随后修改config/index.js
`h5: {
      esnextModules: ['_taro-ui@2.1.0@taro-ui']
    }`

并且把我的tarojs的版本统一由1.2.19改成了1.2.20，重新安装依赖，启动项目，不报上述错误了

然而就在我觉得大功告成时，新的问题又出现了。。。

### 2编译后启动报错

```监听文件修改中...

./.temp/app.js 34:19-32
" '@tarojs/router' does not contain an export named 'createHistory'.

./.temp/app.js 41:0-9
" '@tarojs/router' does not contain an export named 'mountApis'.
```
***********
根据报错内容以及结合我之前的操作，初步判断应该是我自己手动升级tarojs版本后产生的问题，于是各种删除依赖包重新 cnpm install,都没有解决问题，
然后觉定去官方看看issue，发现有人和我遇到类似的场景，都是在router这里编译报错，确实是我手动改升版本，导致taro里面的依赖不全，一句命令
`taro update project` 解决了问题
具体可参考：https://github.com/NervJS/taro/issues/2665


### 3taro-ui样式未生效问题

 按照官方步骤我使用在app.js里全局引入 `import '_taro-ui@2.1.0@taro-ui/dist/style/index.scss`
 结果并未生效，仔细查看文档之后才知道是，taroui的样式对微信基础库是有版本要求的，必须在v2.2.3 以上，所以在开发工具上一改就好了。
 
### 4启动总是报错

基本上是什么 third process 什么的，之前我在另外一台电脑上运行都是没有问题的，后来把开发工具详情里面的勾选项去掉，然后还是不行，但是中断服务，重新编译后又好了。有时候不得不说，这个开发工具还是不那么好用。。
 


    
 
