import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    count: 0,
    heads: 0,
    image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    tails: 0,
  }

  tossButton = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState(prevState =>
      tossResult === 0
        ? {
            count: prevState.count + 1,
            heads: prevState.heads + 1,
            image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
            tails: prevState.tails,
          }
        : {
            count: prevState.count + 1,
            heads: prevState.heads,
            image: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
            tails: prevState.tails + 1,
          },
    )
  }

  render() {
    const {count, heads, tails, image} = this.state
    return (
      <div className="divContainer">
        <div className="cardContainer">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={image} className="image" alt="toss result" />
          <button type="submit" className="button" onClick={this.tossButton}>
            Toss Coin
          </button>
          <div className="container">
            <p className="p">Total:{count}</p>
            <p className="p">Heads:{heads}</p>
            <p className="p">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
