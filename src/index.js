const { render } = ReactDOM;

const style = {
  backgroundColor: 'red',
}

render(
  <h1 id='title'
      className='header'
      style={style}>
      Hello World
  </h1>,
  document.querySelector('body')
)