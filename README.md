# AngularJS Application structure
[![Build Status](https://img.shields.io/travis/kevinsimard/angular-app.svg)](https://travis-ci.org/kevinsimard/angular-app)
[![Coverage Status](https://img.shields.io/coveralls/kevinsimard/angular-app.svg)](https://coveralls.io/r/kevinsimard/angular-app)
[![Dependency Status](https://img.shields.io/david/kevinsimard/angular-app.svg)](https://david-dm.org/kevinsimard/angular-app)
[![devDependency Status](https://img.shields.io/david/dev/kevinsimard/angular-app.svg)](https://david-dm.org/kevinsimard/angular-app#info=devDependencies)

    ┌── dev/
    │   ├── app/
    │   │   ├── components/
    │   │   │   └── layout/
    │   │   │       ├── directives/
    │   │   │       │   ├── footer.js
    │   │   │       │   └── header.js
    │   │   │       └── templates/
    │   │   │           ├── footer.tpl
    │   │   │           └── header.tpl
    │   │   ├── modules/
    │   │   │   └── lang/
    │   │   │       ├── factories/
    │   │   │       │   └── localisation.js
    │   │   │       ├── subscribers/
    │   │   │       │   └── locale.js
    │   │   │       ├── config.js
    │   │   │       └── module.js
    │   │   ├── views/
    │   │   │   └── index/
    │   │   │       ├── controllers/
    │   │   │       │   └── index.js
    │   │   │       ├── templates/
    │   │   │       │   └── index.tpl
    │   │   │       └── states.js
    │   │   ├── .gitignore
    │   │   ├── module.js
    │   │   └── states.js
    │   ├── assets/
    │   │   ├── docs/
    │   │   │   └── .gitkeep
    │   │   ├── fonts/
    │   │   │   └── .gitkeep
    │   │   ├── images/
    │   │   │   └── .gitkeep
    │   │   ├── locales/
    │   │   │   └── en/
    │   │   │       └── index.json
    │   │   ├── scripts/
    │   │   │   └── .gitkeep
    │   │   └── styles/
    │   │       └── .gitkeep
    │   ├── .gitignore
    │   ├── .htaccess
    │   ├── favicon.ico
    │   └── index.html
    ├── gulp/
    │   └── tasks/
    │       ├── stubs/
    │       │   ├── constant.ejs
    │       │   └── template.ejs
    │       ├── browsersync.js
    │       ├── constant.js
    │       ├── copy.js
    │       ├── jshint.js
    │       ├── minify.js
    │       └── template.js
    ├── test/
    │   └── sample.js
    ├── www/
    │   └── .gitignore
    ├── .bowerrc
    ├── .env.example
    ├── .env.json
    ├── .gitattributes
    ├── .gitignore
    ├── .travis.yml
    ├── bower.json
    ├── gulpfile.js
    ├── karma.conf.js
    ├── package.json
    └── README.md
