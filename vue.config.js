const path = require('path') // 引入path路径
function resolve (dir) {
    return path.join(__dirname, dir)
  }
  console.log(process.env.VUE_APP_BASE_URL,'publicPath')
module.exports = {
    publicPath: process.env.VUE_APP_BASE_URL,
    productionSourceMap: false,//是否生成source map文件
    // host:'0.0.0.0',//方便后端进行访问本地联调
    chainWebpack: (config)=>{
        config.plugins.delete('preload') // 删除preload,首屏渲染速度增快
        config.plugins.delete('prefetch')// 删除prefetch,为了提前加载下一个导航所需的资源，提升下一次导航的首屏渲染性能。
        //修改文件引入自定义路径
        config.resolve.alias
            .set('@', resolve('src'))
            .set('&', resolve('src/components'))
    }

}