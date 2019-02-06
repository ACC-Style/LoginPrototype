module.exports = {
  outputDir: 'docs',
  assetsDir: 'assets',
  baseUrl: '/LoginPrototype/',
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,

  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        data: '@import "@/assets/scss/config/_colors.scss";'
      }
    }
  },

  lintOnSave: undefined
};
