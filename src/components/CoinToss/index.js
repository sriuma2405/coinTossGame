// Write your code here
import './index.css'

import {Component} from 'react'

const headImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const tailImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: headImg,
    headsCount: 0,
    tailsCount: 0,
  }

  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadCount = headsCount
    let latestTailsCount = tailsCount

    if (toss === 0) {
      tossImage = headImg
      latestHeadCount += 1
    } else {
      tossImage = tailImg
      latestTailsCount += 1
    }
    this.setState({
      tossResultImage: tossImage,
      headsCount: latestHeadCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="coinToss-container">
        <div className="coin-card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="choice">Heads (or) Tails</p>
          <img
            src={tossResultImage}
            alt="toss result"
            className="toss-result-img"
          />
          <button type="button" className="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result">Total:{totalCount}</p>
            <p className="result">Heads:{headsCount}</p>
            <p className="result">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
