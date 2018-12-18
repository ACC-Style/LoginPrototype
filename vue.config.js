module.exports = {
  outputDir: "docs",
  assetsDir: "assets",
  baseUrl: "/CSTool/",
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,

  css: {
    sourceMap: true,
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `@import "@/assets/scss/config/_colors.scss";`
      }
    }
  },

  lintOnSave: undefined
};
