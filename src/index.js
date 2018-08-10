import React from 'react'
import { render } from 'react-dom'
import { hello } from './lib'

render(
  <div>
    {hello}
  </div>,
  document.querySelector('body')
)