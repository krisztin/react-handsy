import React from 'react'
import text from './titles.json'

export const hello = (
  <h1 id="title"
      className="header"
      style={{backgroundColor: 'green'}}>
      {text.hello}
  </h1>
)