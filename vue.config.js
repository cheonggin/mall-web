const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { VantResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      AutoImport({ resolvers: [VantResolver()] }),
      Components({ resolvers: [VantResolver()] })
    ]
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5001',
        pathRewrite: { '^/api': '' },
        changeOrigin: true
      }
    }
  },
  chainWebpack: config => {
    // 生产模式
    config.when(process.env.NODE_ENV === 'production', config => {
      config.entry('app').clear().add('./src/main.prod.ts')

      config.set('externals', {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        pinia: 'Pinia',
        axios: 'axios',
        '@better-scroll/core': 'BScroll',
        'better-scroll/observe-dom': 'ObserveDOM',
        '@better-scroll/mouse-wheel': 'MouseWheel',
        '@better-scroll/pull-up': 'Pullup',
        '@vant/area-data': 'areaList'
      })

      // 生产模式引入cdn资源
      config.plugin('html').tap(args => {
        args[0].isProd = true
        return args
      })
    })

    // 开发模式
    config.when(process.env.NODE_ENV === 'development', config => {
      config.entry('app').clear().add('./src/main.dev.ts')

      // 开发模式不引入cdn资源
      config.plugin('html').tap(args => {
        args[0].isProd = false
        return args
      })
    })
  }
})
