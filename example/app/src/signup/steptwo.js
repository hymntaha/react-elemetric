'use strict'
import React, { Component, PropTypes } from 'react'

const store = { email: '', emailConfirm: '' }

const StepTwo = React.createClass ({
    getInitialState() {
        return store
    },

    handleCarChanged(event) {
      store.car = event.target.value
      this.setState(store)
    },

    handleValueChanged(event) {
      store.value = event.target.value
      this.setState(store)
    },

    render() {
        return (
        <div>
            <div className="row">
                <select
                    autoComplete="off"
                    className="form-control"
                    onChange={this.handleCarChanged}
                    value={this.state.car}
                    required>
                    <option value="">Please select your car brand</option>
                    <option value="Lexus">Lexus</option>
                    <option value="BMW">BMW</option>
                    <option value="Bentley">Bentley</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="Maserati">Maserati</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="row">
                <select
                    autoComplete="off"
                    className="form-control"
                    onChange={this.handleValueChanged}
                    value={this.state.value}
                    required>
                    <option value="">Please select the price value of your car</option>
                    <option value="ten">10,000-20,000</option>
                    <option value="twenty">20,000-30,000</option>
                    <option value="thirty">30,000-40,000</option>
                    <option value="forty">40,000-50,000</option>
                    <option value="fifty">50,000-60,000</option>
                    <option value="sixty">60,000-70,000</option>
                    <option value="seventy">70,000-80,000</option>
                    <option value="Other">Other</option>
                </select>
            </div>
        </div>
    )}
})

export { StepTwo }