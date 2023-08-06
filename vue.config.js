const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,//忽略语法检查
  devServer:{
    open:true,
    host:'jl.com',
    port:8088,
    proxy:{
      '/api':{
        target:'http://sph-h5-api.atguigu.cn',
        changeOrigin:true
      }
    }
  },

  pages:{
   index:{
     //入口文件
     entry:'src/main.js',
     //项目标题
     title:'尚品汇项目'
   }
  }
})
