'use strict'
import React, { Component, PropTypes } from 'react'

const store = { suv: '', sedan: '', convertible: '', hatchback: '', crossover: '', coupe:'' }

const StepThree = React.createClass ({
    getInitialState() {
        return store
    },
    
    handleSuvChanged(event) {
      store.suv = event.target.value
      this.setState(store)  
    },

    handleSedanChanged(event) {
      store.sedan = event.target.value
      this.setState(store)
    },

    handleConvertibleChanged(event) {
      store.convertible = event.target.value
      this.setState(store)
    },

    handleHatchbackChanged(event) {
      store.hatchback = event.target.value
      this.setState(store)
    },

    handleCrossoverChanged(event) {
        store.crossover = event.target.value
        this.setState(store)
    },

    handleCoupeChanged(event) {
        store.coupe = event.target.value
        this.setState(store)
    },


    render() {
        return (
            <div>
                <div className="row">
                    <h3>Please select the type of car you are driving:</h3>
                    <div className="col-md-3">
                        <label>
                            <input type="radio" name="car" value={this.state.suv} onChange={this.handleSuvChanged} />
                            <img className="img-responsive" src="http://www.bentleymotors.com/content/dam/bentley/Master/Models/Promoted%20items/Bentayga_MY18_Portofino_register%20638%20x%20223.jpg/_jcr_content/renditions/original./Bentayga_MY18_Portofino_register%20638%20x%20223.jpg"/>
                        </label>
                    </div>
                    <div className="col-md-3">
                        <label>
                            <input type="radio" name="car" value={this.state.sedan} onChange={this.handleSedanChanged} />
                            <img className="img-responsive" src="http://media.caranddriver.com/images/media/638444/honda-accord-photo-640604-s-original.jpg"/>
                        </label>
                    </div>
                    <div className="col-md-3">
                        <label>
                            <input type="radio" name="car" value={this.state.convertible} onChange={this.handleConvertibleChanged} />
                            <img className="img-responsive" src="https://services.edmunds-media.com/image-service/media-ed/sharp/?quality=70&format=jpg:progressive&resize=500x0&image=%2Fbmw%2F2-series%2F2017%2Fevox%2F2017_bmw_2-series_convertible_m240i_tds_evox_1_1280.jpg"/>
                        </label>
                    </div>
                    <div className="col-md-3">
                        <label>
                            <input type="radio" name="car" value={this.state.hatchback} onChange={this.handleHatchbackChanged} />
                            <img className="img-responsive" src="http://media.caranddriver.com/images/media/51/honda-civic-hatchback-prototype-inline2-photo-666478-s-original.jpg"/>
                        </label>
                    </div>
                    <div className="col-md-3">
                        <label>
                            <input type="radio" name="car" value={this.state.crossover} onChange={this.handleCrossoverChanged} />
                            <img className="img-responsive" src="http://1.bp.blogspot.com/-J8ooZLmXT7Y/Vd23UDm26tI/AAAAAAAAH5Q/Um0Arbllz8Y/s1600/nissan-kicks-concept.jpg"/>
                        </label>
                    </div>
                    <div className="col-md-3">
                        <label>
                            <input type="radio" name="car" value={this.state.coupe} onChange={this.handleCoupeChanged} />
                            <img className="img-responsive" src="https://resources.stuff.co.nz/content/dam/images/1/2/d/9/a/l/image.related.StuffLandscapeSixteenByNine.620x349.12covx.png/1419386835288.jpg"/>
                        </label>
                    </div>
                </div>
            </div>
    )}
})

export { StepThree }