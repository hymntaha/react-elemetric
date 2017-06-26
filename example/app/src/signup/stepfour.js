'use strict'
import React, { Component, PropTypes } from 'react'

const store = { checked: false }

const StepFour = React.createClass ({
    getInitialState() {
        return store
    },

    handleCheckedChanged(event) {
      store.checked = event.target.checked
      this.setState(store)
    },

    render() {
        return (
        <div>
            <h2>Please click previous to change your inputs</h2>
        </div>
  )}
})

export { StepFour }

