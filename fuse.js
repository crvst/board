const TypeHelper = require('fuse-box-typechecker').TypeHelper;
const path = require('path');
const express = require('express');

const typeHelper = TypeHelper({
  basePath: './',
  name: 'TypeHelper',
  throwOnGlobal: true,
  throwOnSemantic: true,
  throwOnSyntactic: true,
  tsConfig: './tsconfig.json',
  tsLint: './tslint.json',
});

const {
  CSSPlugin,
  CSSResourcePlugin,
  FuseBox,
  JSONPlugin,
  PostCSSPlugin,
  QuantumPlugin,
  Sparky,
  StylusPlugin,
  WebIndexPlugin,
} = require('fuse-box');
const isProduction = process.env.NODE_ENV === 'production';

console.log('isProduction', isProduction);

const fuse = new FuseBox({
  experimentalFeatures: true,
  hash: isProduction,
  homeDir: 'src',
  debug: true,
  showErrors: true,
  showErrorsInBrowser: true,
  output: 'build/$name.js',
  plugins: [
    [
      StylusPlugin(),
      PostCSSPlugin([
        require('postcss-omit-import-tilde'),
        require('postcss-import'),
        require('postcss-font-smoothing'),
        require('postcss-css-variables')({
          preserve: !isProduction,
        }),
        require('cssnano')({
          preset: 'advanced',
        }),
      ]),
      CSSResourcePlugin(),
      CSSPlugin({
        outFile: (file) => `./build/${file}`,
        inject: (file) => `${file}`,
      }),
    ],
    JSONPlugin(),
    WebIndexPlugin({
      template: 'static/index.html',
      name: 'Board',
    }),
    isProduction && QuantumPlugin({
      treeshake: true,
      uglify: true,
    }),
  ],
  sourceMaps: !isProduction,
  target: 'browser@es6',
  useTypescriptCompiler: true,
  useJsNext : ['redux-actions'],
  polyfillNonStandardDefaultUsage: true,
});

/*
 * Bundle vendor dependencies
 * */
fuse.bundle('vendor').instructions('~ index.tsx');

/*
 * Bundle app core itself
 * */
const appCore = fuse.bundle('app-core').instructions('> [index.tsx]');
/*
 * Sparky tasks
 * */
Sparky.task('default', ['clean', 'copy-root-static'], () => {
  fuse.dev({ root: false }, server => {
    const dist = path.resolve('./build');
    const app = server.httpServer.app;
    app.use("/", express.static(path.join(dist, '/')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(dist, 'index.html'));
    });
  });
  appCore.watch().hmr();
  return fuse.run();
});
Sparky.task('copy-root-static', () =>
  Sparky
  .src('static/!(*.html)')
  .file('*', () => {})
  .dest('build/$name'),
);
Sparky.task('clean', () =>
  Sparky.src('build/').clean('build/'),
);
Sparky.task('build', ['clean', 'copy-root-static'], () => {
    typeHelper.runSync();
    fuse.run();
  },
);
