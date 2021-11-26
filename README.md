# Audi - Test Project 

Website for Audi. Coded by Jovana Marčeta

## Contributors ✨


<table>
	<tr>
		<td align="center"><a href="https://github.com/jovana-marceta"><img src="https://avatars.githubusercontent.com/u/69209749?v=4" width="100px;" alt=""/><br /><sub><b>Jovana Marčeta</b></sub></a><br /><a href="https://www.linkedin.com/in/jovanamarceta/" title="Linkedin">💬</a> <a href="https://jovana-marceta.github.io/app/index.html" title="Portfolio">🌏</a></td>
	</tr>
</table>


[![license](https://img.shields.io/github/license/maksabuzyarov/gulp-webpack-handlebars)](https://github.com/maksabuzyarov/gulp-webpack-handlebars/blob/master/LICENSE)

## Documentation

* [Getting Started](#getting-started)
  * [Install](#install)
  * [Use tasks](#use-tasks)
  * [Use SVG sprite](#how-to-use-svg-sprite)
  
* [Features](#features)
* [File structure](#file-structure)


## Getting Started

### Install

1. Install **NodeJS** and **yarn**
2. Clone this repository
3. Run `yarn install`


### Use tasks

|                | Task Name                                    | Description                                               | Environment |
| -------------- | :------------------------------------------- | :-------------------------------------------------------- | :---------- |
| :construction: |  `gulp`                     | Compile dev build, start the server and watch for changes | Development |
| :factory:      |  `gulp build --production` | Compile production build                                  | Production  |


## Features

| Type           | List                                                         |
| -------------- | ------------------------------------------------------------ |
| Task Runner    | [Gulp](https://www.npmjs.com/package/gulp)                   |
| CSS            | [SASS / SCSS](https://www.npmjs.com/package/gulp-sass), [CleanCSS](https://www.npmjs.com/package/gulp-clean-css), [Autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) |
| JS             | [Webpack](https://www.npmjs.com/package/webpack), [Babel](https://www.npmjs.com/package/babel-loader) |
| JS Examples    | [FileInclude](https://www.npmjs.com/package/gulp-file-include), [Uglify](https://www.npmjs.com/package/gulp-uglify) |
| HTML Templates | [Handlebars.js](https://www.npmjs.com/package/handlebars), [handlebars-layouts](https://github.com/shannonmoeller/handlebars-layouts) |
| Images         | [ImageMin](https://www.npmjs.com/package/gulp-imagemin)      |
| Live Reload    | [BrowserSync](https://www.npmjs.com/package/browser-sync)    |
| Debug          | [Sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps), [Plumber](https://www.npmjs.com/package/gulp-plumber) |
| More           | [Favicons](https://www.npmjs.com/package/favicons), [SVG Sprites](https://www.npmjs.com/package/gulp-svg-sprite), [Notifier](https://www.npmjs.com/package/node-notifier), [Changed](https://www.npmjs.com/package/gulp-changed) |
| Included JS    | [Jquery](https://www.npmjs.com/package/jquery), [CurrentDevice](https://www.npmjs.com/package/current-device) |

**[⬆ back to menu](#documentation)**

## File structure

```
|-- dist
|-- tasks
|-- src
|   |-- fonts
|   |-- img
|   |   |-- favicon
|   |   |   |-- logo.png
|   |   |-- content (optional)
|   |   |-- main (optional)
|   |   |-- svg-sprite
|   |-- js
|   |   |-- components
|   |   |-- other
|   |   |-- app.js
|   |   |-- main.js
|   |-- styles
|   |   |-- components
|   |   |-- main.scss
|   |   |-- _app.scss
|   |   |-- _variables.scss
|   |-- views
|   |   |-- data
|   |   |-- helpers
|   |   |-- partials
|   |   |-- templates
|   |   |   |-- pages
|   |   |   |-- index.html
|-- .babelrc.js
|-- .browserslistrc
|-- .gitignore
|-- gulpfile.babel.js
|-- package.json
|-- webpack.config.js
```

- `dist` - folder with the finished results of assembly. In dev mode, is the root of the server.

- `tasks` -  directory with gulp tasks.

- `.babelrc.js` - babel static configuration.

- `gulpfile.babel.js` - config and main tasks.

- `src` - source files

  - `fonts` - fonts files in directories named by font name. For example *fonts/Ubuntu/Regular.{woff, woff2, ttf}*

  - `img` - all images for optimization:

    - `content` - optional directory (Implied as: dynamic images for pages, may be removed after placing the layout on the CMS)
    - `main` - optional directory (Implied as: static template images (logo, background and etc.))
    - `favicon` -  generating favicons from one image

    - `svg-sprite` - optimizes them and bakes them into SVG sprites

  - `views` 

    - `helpers` - *Handlebars.js* helpers

    - `partials` - *Handlebars.js* templates

    - `template` - site pages

      - `index.html` - entry point

      - `pages` - all pages

