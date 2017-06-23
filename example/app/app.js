'use strict'
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Multistep from '../../src/index.js'
import { steps } from './src/components/index.js'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div>
          <Multistep initialStep={1} steps={steps}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("app"))
