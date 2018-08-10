import React from 'react'
import text from './titles.json'
import './scss/main.scss'

export const hello = (
  <h1 id="title"
      className="hello">
      {text.hello}
  </h1>
)