Learning how to tool up for a React job manually without create-react-app/Gatsby and co.

# React: the Very Pure and Basics

In its purest form you can use React simply inside your existing structure, inline.

Load React and React-DOM in the `<head>`.

Add `index.js` inside the `body` in `<script>` tags.

## Pure React
```javascript
const title = React.createElement(
  'h1',
  {id: 'title', className: 'header'},
  'Hello World'
)

ReactDOM.render(
  title,
  document.querySelector('body')
)
```

## With ES6 destructuring

```javascript
const { createElement } = React;
const { render } = ReactDOM;

const title = createElement(
  'h1',
  {id: 'title', className: 'header'},
  'Hello World'
)

render(
  title,
  document.querySelector('body')
)
```

## Styling

```javascript
const style = {
  backgroundCOlor: 'red',
}

const title = createElement(
  'h1',
  {id: 'title', className: 'header', style: style},
  'Hello World'
)
```

## JSX

Render the element straight out with JSX making `createElement` superfluous.

```jsx
const { render } = ReactDOM;

const style = {
  backgroundCOlor: 'red',
}

render(
  <h1 id='title'
      className='header'
      style={style}>
      Hello World
  </h1>
  document.querySelector('body')
)
```

## Inline styling with JSX

`style={{backgroundColour: 'red'}}`

# Tooling / Transpiling
JSX needs to be transpiled into JS. How do you do this?

## Transpiling w/ Babel in the browser

**This is really only for quick prototyping**

For inbrowser transpiling put Babel CDN in `<header>`

AND

`<script type="text/babel" src="whatever.js"></script>`

This lets Babel know to transpile that specific file, however transpiling in the browser is not a good idea.

## Transpiling w/ babel-cli

```
$ npm init
$ npm install babel-cli@6.18.0 --save-dev
$ sudo npm install -g babel-cli
```
### Create a `.babelrc` file
This tells Bable what to transpile using which presets (latest JS and react)

_(Webpack 1)_

```json
{
  "presets": ["latest", "react", "stage-0"]
}
```

_Webpack 3_

```json
{
  "presets": ["env", "react"]
}
```

### Install presets

```
$ npm install babel-preset-react@6.16.0 --save-dev
$ npm install babel-preset-latest@6.16.0 --save-dev
$ npm install babel-preset-stage-0@6.16.0 --save-dev
```
### Transpiling

`$ babel src --out-file destination.` For example: 

```
$ babel ./src/index.js --out-file ./dist/bundle.js
```

## Webpack 1 and 3
_Bye-bye, Gulp and Grunt. Hello, Webpack!_

1. Add a `webpack.config.js` file

_(Webpack 1)_

```javascript
var webpack = require("webpack"); //best practice to require...ES6 import

module.exports = {
  entry: "./src/index.js",
  output: {
    path: "dist/assets",
    filename: "bundle.js",
    publicPath: "assets"
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3000
  },
  module: {
    loaders: [
      test: /\.js$/,  // look for files that has a .js extension
      exclude: /(node_modules)/,
      loader: ["babel-loader"],
      query: {
        presets: ["latest", "react", "stage-0"]
      }
    ]
  }
}
```
_(Webpack 3)_

```javascript
var webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: {
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ["env", "react"]
      }
    }
  }
}
```

2. Install Webpack _(Webpack 1)_

```
npm install webpack@1.13.3 --save-dev
npm install babel-loader@6.2.5 --save-dev
npm install webpack-dev-server@1.16.2 --save-dev
```

Now if you try and run `webpack` in the CL it does not work. You'll need to install it globally.

`sudo npm install -g webpack@1.13.3`

OR instead of global install just get more specific

`./node_modules/.bin/webpack`

Once installed *add the webpack dev server* to the `package.json` file along with `"build"` command

```
  "scripts": {
    "start": "./node_modules/.bin/webpack-dev-server",
    "build": "./node_modules/.bin/webpack"
```

3. Install React

```
npm install react@15.3.2 --save
npm install react-dom@15.3.2 --save

```

## Handling JSON

See `titles.json` that we will squeeze in to `lib.js`

```javascript
import React from 'react'
import text from './titles.json'

export const hello = (
  <h1 id="title"
      className="header"
      style={{backgroundColor: 'green'}}>
      {text.hello}
  </h1>
)
```

Then into `index.js`

```javascript
import React from 'react'
import { render } from 'react-dom'
import { hello } from './lib'

render(
  <div>
    {hello}
  </div>,
  document.querySelector('body')
)
```

Add `json-loader` in `webpack.config.js`

```javascript
var webpack = require("webpack"); //best practice to require...ES6 import

module.exports = {
  entry: "./src/index.js",
  output: {
    path: "dist/assets",
    filename: "bundle.js",
    publicPath: "assets"
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,  // look for files that has a .js extension
        exclude: /(node_modules)/,
        loader: ["babel-loader"],
        query: {
          presets: ["latest", "react", "stage-0"]
        }
      },
      {
          test: /\.json$/,
          exclude: /(node_modules)/,
          loader: "json-loader"
      }
    ]
  }
}
```

Install `json-loader`

```bash
$ npm install json-loader@0.5.4 --save-dev
```
