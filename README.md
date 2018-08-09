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

```json
{
  "presets": ["latest", "react", "stage-0"]
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

## Webpack
_Bye-bye, Gulp and Grunt. Hello, Webpack!_

1. Add a `webpack.config.js` file

```javascript
var webpack = require("webpack"); //best practice to require...ES6 import

module.exports = {
  entry: ".src/index.js",
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
    loaders: {
      test: /\.js$/,  // look for files that has a .js extension
      exclude: /(node_modules)/,
      loader: ['babel-loader'],
      query: {
        presets: ["latest", "react", "stage-0"]
      }
    }
  }
}
```