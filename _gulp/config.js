// ---
// CONFIG FILE
// Define your tasks & variables here
// ---

var path = '';

module.exports = {

  scss: {
    src: path + 'scss/**/*.scss',
    settings: {
      outputStyle: 'compressed'
    },
    cssDest: path + 'css/',
    jekyllCssDes: path + '_site/css/',
    browsers: [ // Autoprefixer supported browsers
      'last 2 versions',
      'ie 9-11',
      'ios 8-10',
      'android 4-5'
    ]
  },

  css: {
    src: path + 'src/*.css',
    watch: path + 'src/**/*.css',
    settings: {
      stage: 1,
      browsers: [ // Autoprefixer supported browsers
        'last 2 versions',
        'ie 11',
        'ios 8-10',
        'android 4-5'
      ]
    },
    concatFilename: 'build.css',
    cssDest: path + 'css/',
    jekyllCssDes: path + '_site/css/'
  },

  js: {
    src: [  // source js file
      path + 'js/frontend.js',
      path + 'js/_components/*.js',
      path + 'js/loader.js'

    ],
    vendors: [ // source vendors frontend
    ],
    concatFilename: 'frontend.concat.js', // result filename
    concatVendorFilename: 'vendor.concat.js', // result filename vendor scripts
    jekyllJsDest: path + '_site/js/',
    jsDest: path + 'js/'
  },

  jekyll: {
    buildMessage: '<span style="color: grey">Building</span> jekyll'
  },

  browsersync: {
    server: {
      baseDir: path + '_site',
      reloadDelay: 2000,
      debounce: 200,
      notify: true,
      ghostMode: {
        clicks: true,
        location: true,
        forms: true,
        scroll: false
      }
    }
  },

  watch: {
    jekyllSource: [    // Files that trigger a Jekyll rebuild
      path + 'img/**/*.png',
      path + 'img/**/*.jpg',
      path + 'img/**/*.svg',
      path + '_includes/**/*.svg',
      path + '_posts/*.md',
      path + '_data/*.yml',
      path + '**/*.html',
      path + '_config.yml',
      '!' + path + '_site/**/*'
    ]
  },

  compressjs: {
    src: path + 'js/*.js',
    dest: path + '_site/js/'
  },

  dependencies: {
    dest: path + 'vendor/'
  },

  symbols: {
    src: path + '_artwork/symbols/**/*.svg', // Location of source icons
    dest: path + 'img/svg', // Destination of main SVG
    prefix: 'c-symbol-', // SVG symbols ID prefix e.g. `c-symbol-right`
    class: 'c-symbolset' // Main SVG import classname
  }

};
