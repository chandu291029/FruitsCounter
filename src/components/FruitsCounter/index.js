import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {Banana: 0, Mango: 0}

  onBanana = () => {
    this.setState(prevState => ({Banana: prevState.Banana + 1}))
  }

  onMango = () => {
    this.setState(prevState => ({Mango: prevState.Mango + 1}))
  }

  render() {
    const {Banana, Mango} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1>
            bab at {Mango} mangoes {Banana} banana
          </h1>
          <div className="fruitscontainer">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="img"
                alt="button"
              />
              <div>
                <button className="button" onClick={this.onMango}>
                  Eat Mango
                </button>
              </div>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="img"
                alt="button"
              />
              <div>
                <button className="button" onClick={this.onBanana}>
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
