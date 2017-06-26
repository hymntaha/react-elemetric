'use strict'
import React, { Component, PropTypes } from 'react'

const store = { insurance: '', howLong: '' }

const StepOne = React.createClass ({
    getInitialState() {
        return store
    },

    handleInsuranceChanged(event) {
      store.insurance = event.target.value
      this.setState(store)
    },

    handleHowLongChanged(event) {
      store.howLong = event.target.value
      this.setState(store)
    },

    render() {
        return (
        <div>
            <div className="row">
            <div className="six columns">
                <label>Your car insurance</label>
                <textarea className="u-full-width" placeholder="Insurance"
                                                type="text"
                                                rows="4" cols="50"
                                                onChange={this.handleInsuranceChanged}
                                                value={this.state.insurance}
                                                autoFocus/>
            </div>
            </div>
            <div className="row">
            <div className="six columns">
                <label>How long do you use the current insurance?</label>
                <textarea className="u-full-width" placeholder="Please enter how long you use the current insurance here."
                                                type="text"
                                                rows="4" cols="50"
                                                onChange={this.handleHowLongChanged}
                                                value={this.state.howLong}/>
            </div>
            </div>
        </div>
    )}
})

export { StepOne }
