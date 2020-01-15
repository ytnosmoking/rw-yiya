const {
  override,
  addLessLoader,
  overrideDevServer,
  fixBabelImports, addDecoratorsLegacy, addWebpackAlias } = require('customize-cra')



const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin') // 打包进度

const isDev = process.env.NODE_ENV === 'development'
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}
const plugins = [new SimpleProgressWebpackPlugin()]
if (isDev) {
  plugins.push(new BundleAnalyzerPlugin({
    analyzerPort: 8889
  }))
}

const customize = () => config => {
  if (!isDev) {
    // pubicPath
    config.output.publicPath = './';
    const paths = require('react-scripts/config/paths');
    paths.appBuild = resolve('APPINFO');
    config.output.path = resolve('APPINFO');
    // dropConsole
    if (config.optimization.minimizer) {
      config.optimization.minimizer.forEach((minimizer) => {
        if (minimizer.constructor.name === 'TerserPlugin') {
          minimizer.options.terserOptions.compress.drop_console = true
        }
      })
    }
  }

  // splitchuks
  const splitChunksConfig = config.optimization.splitChunks;
  Object.assign(splitChunksConfig, {
    chunks: 'all',
    cacheGroups: {
      vendors: {
        test: /node_modules/,
        name: 'vendors',
        priority: -10,
      },
      common: {
        name: 'common',
        minChunks: 2,
        minSize: 30000,
        chunks: 'all'
      }
    }
  })

  // style-resource-loader
  const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf
  loaders[loaders.length - 3].use.push({
    loader: 'style-resources-loader',
    options: {
      patterns:
        [
          resolve('src/assets/css/common.less'),
          resolve('src/assets/css/animate.less')
        ],
      injector: 'append'
    }
  })
  // addPlugin
  config.plugins.push(...plugins)

  // ---------------
  require('react-app-rewire-postcss')(config, {
    plugins: loader => [
      require('postcss-flexbugs-fixes'),
      require('postcss-preset-env')({
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
      }),
      require('postcss-aspect-ratio-mini')({}),
      require('postcss-px-to-viewport')({
        viewportWidth: 750, // (Number) The width of the viewport.
        viewportHeight: 1334, // (Number) The height of the viewport.
        unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
        viewportUnit: 'vw', // (String) Expected units.
        exclude: /(\/|\\)(node_modules)(\/|\\)/,
        selectorBlackList: ['.ignore', '.hairlines',
          '.fz',
          '.fz12',
          '.fz14',
          '.fz16',
          '.fz18',
          '.fz20',
        ], // (Array) The selectors to ignore and leave as px.
        minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
        mediaQuery: false // (Boolean) Allow px to be converted in media queries.
      }),
      require('postcss-write-svg')({
        utf8: false
      }),
      require('postcss-viewport-units')({}),
      require('cssnano')({
        preset: "advanced",
        autoprefixer: false,
        "postcss-zindex": false
      })
    ]
  });
  // ---------------
  return config
}


const resetPort = () => config => {
  console.log(` in  reset Port`)
  // console.log(config)
  // return config
  return config
  // throw new Error()
  // return config
}

module.exports = {

  webpack: override(

    addLessLoader(
      {
        javascriptEnabled: true,
      }
    ),
    customize(),
    fixBabelImports('import', {
      libraryName: 'antd-mobile',
      style: 'css'
    }),

    addDecoratorsLegacy(),
    addWebpackAlias({
      pages: resolve('src/pages'),
      component: resolve('src/components'),
      store: resolve('src/store'),
      utils: resolve('src/utils'),
      router: resolve('src/router'),
      images: resolve('src/assets/image')
    })
  ),
  devServer: overrideDevServer(resetPort()),
}

