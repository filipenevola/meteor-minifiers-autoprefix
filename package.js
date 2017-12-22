Package.describe({
  name: 'filipenevola:minifiers-autoprefixer',
  version: '1.3.5_1',
  summary: 'Standard minifiers used with Meteor apps by default + css autoprefixer.',
  git: 'https://github.com/filipenevola/meteor-minifiers-autoprefixer.git',
  documentation: 'README.md'
});

Package.registerBuildPlugin({
  name: "minifyStdCSS",
  use: [
    'minifier-css@1.2.16'
  ],
  npmDependencies: {
    "source-map": "0.5.6",
    "lru-cache": "4.0.1",
    "postcss": "5.0.19",
    "autoprefixer": "6.3.6",
    "fs": "0.0.2"
  },
  sources: [
    'plugin/minify-css.js'
  ]
});

Package.onUse(function(api) {
  api.use('isobuild:minifier-plugin@1.0.0');
});

Package.onTest(function(api) {
});
