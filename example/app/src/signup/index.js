import React, { Component, PropTypes } from 'react'
import { StepOne } from './stepone'
import { StepTwo } from './steptwo'
import { StepThree } from './stepthree'
import { StepFour } from './stepfour'

const steps =
    [
      {name: 'Free Response', component: <StepOne/>},
      {name: 'Dropdown MultiSelect', component: <StepTwo/>},
      {name: 'Multi Choice Image', component: <StepThree/>},
      {name: 'Previous', component: <StepFour/>}
    ]

export { steps }