# AngularJS Application Structure

[![Build Status](https://travis-ci.org/kevinsimard/angular-app.svg)](https://travis-ci.org/kevinsimard/angular-app)
[![Test Coverage](https://codeclimate.com/github/kevinsimard/angular-app/badges/coverage.svg)](https://codeclimate.com/github/kevinsimard/angular-app/coverage)
[![Dependency Status](https://david-dm.org/kevinsimard/angular-app.svg)](https://david-dm.org/kevinsimard/angular-app)
[![devDependency Status](https://david-dm.org/kevinsimard/angular-app/dev-status.svg)](https://david-dm.org/kevinsimard/angular-app#info=devDependencies)

## Installation

> This structure utilizes [Npm](https://docs.npmjs.com/getting-started/installing-node) and [Bower](http://bower.io/#install-bower) to manage its dependencies. So, before using it, you will need to make sure you have both of them installed on your machine.

Once installed, run the following commands to install the dependencies.

```bash
npm install
bower install
```

## Gulp Tasks

**_Developement environment(s)_**

```bash
gulp dev
```

> The following options are available:
* **_--watch_**: Rerun subtasks when a file changes
* **_--env=\<ENV>_**: Override default configuration file
* **_--serve_**: Built-in static server for basic HTML/JS/CSS websites

**_Production environment(s)_**

```bash
gulp www
```

> The following options are available:
* **_--env=\<ENV>_**: Override default configuration file

## Unit Tests

**_Note_**: Make sure that dependencies are installed (`npm install`).

The *unit tests* are available with `npm test` which is actually a shortcut for `gulp test`.

## Code Structure

    ├── dev
    │   ├── app
    │   │   ├── components
    │   │   │   └── layout
    │   │   │       ├── directives
    │   │   │       │   ├── footer.js
    │   │   │       │   └── header.js
    │   │   │       └── templates
    │   │   │           ├── footer.tpl
    │   │   │           └── header.tpl
    │   │   ├── modules
    │   │   │   └── lang
    │   │   │       ├── factories
    │   │   │       │   └── translate.js
    │   │   │       ├── locales
    │   │   │       │   └── en.json
    │   │   │       ├── subscribers
    │   │   │       │   └── locale.js
    │   │   │       ├── .gitignore
    │   │   │       ├── config.js
    │   │   │       └── module.js
    │   │   ├── views
    │   │   │   └── index
    │   │   │       ├── controllers
    │   │   │       │   └── index.js
    │   │   │       ├── templates
    │   │   │       │   └── index.tpl
    │   │   │       └── states.js
    │   │   ├── .gitignore
    │   │   ├── bootstrap.js
    │   │   ├── module.js
    │   │   └── states.js
    │   ├── assets
    │   │   ├── docs
    │   │   │   └── .gitkeep
    │   │   ├── fonts
    │   │   │   └── .gitkeep
    │   │   ├── images
    │   │   │   └── .gitkeep
    │   │   ├── scripts
    │   │   │   └── .gitkeep
    │   │   └── styles
    │   │       └── .gitkeep
    │   ├── .gitignore
    │   ├── .htaccess
    │   ├── favicon.ico
    │   └── index.html
    ├── gulp
    │   └── tasks
    │       ├── stubs
    │       │   ├── constant.ejs
    │       │   ├── locale.ejs
    │       │   └── template.ejs
    │       ├── browsersync.js
    │       ├── constant.js
    │       ├── copy.js
    │       ├── jshint.js
    │       ├── locale.js
    │       ├── minify.js
    │       └── template.js
    ├── test
    │   ├── coverage
    │   │   └── .gitignore
    │   └── specs
    │       ├── components
    │       │   └── layout
    │       │       └── directives
    │       │           ├── footer.js
    │       │           └── header.js
    │       ├── modules
    │       │   └── lang
    │       │       ├── factories
    │       │       │   └── translate.js
    │       │       └── subscribers
    │       │           └── locale.js
    │       └── views
    │           └── index
    │               ├── controllers
    │               │   └── index.js
    │               └── states.js
    ├── www
    │   └── .gitignore
    ├── .bowerrc
    ├── .editorconfig
    ├── .env.example
    ├── .env.json
    ├── .gitattributes
    ├── .gitignore
    ├── .jshintrc
    ├── .travis.yml
    ├── LICENSE.txt
    ├── README.md
    ├── bower.json
    ├── gulpfile.js
    ├── karma.conf.js
    └── package.json

## License

This package is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
