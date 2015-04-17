# AngularJS Application Structure
[![Build Status](https://travis-ci.org/kevinsimard/angular-app.svg)](https://travis-ci.org/kevinsimard/angular-app)
[![Coverage Status](https://coveralls.io/repos/kevinsimard/angular-app/badge.svg)](https://coveralls.io/r/kevinsimard/angular-app)
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
    │   │   ├── bootstrap.js
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
    │   ├── coverage/
    │   │   └── .gitignore
    │   └── specs/
    │       ├── components/
    │       │   └── layout/
    │       │       └── directives/
    │       │           ├── footer.js
    │       │           └── header.js
    │       ├── modules/
    │       │   └── lang/
    │       │       ├── factories/
    │       │       │   └── translate.js
    │       │       └── subscribers/
    │       │           └── locale.js
    │       └── views/
    │           └── index/
    │               ├── controllers/
    │               │   └── index.js
    │               └── states.js
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
    ├── LICENSE.txt
    ├── package.json
    └── README.md

## License
This structure is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
