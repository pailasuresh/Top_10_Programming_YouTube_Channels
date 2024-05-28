import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  user = event => {
    const userInput = event.target.value
    this.setState({searchInput: userInput})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props

    const userSearchedList = destinationsList.filter(eachOne =>
      eachOne.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="main">
        <dvi className="sub-main">
          <h1>Top 10 Programming YouTube Channels</h1>
          <p className="p">
            Search and discover the best YouTube channels for learning
            programming and enhancing your coding skills.
          </p>
          <div className="search">
            <input
              type="search"
              className="input"
              onChange={this.user}
              placeholder="Search YT Channel"
              value={searchInput}
            />
          </div>
          <ul className="ul">
            {userSearchedList.map(eachDestination => (
              <DestinationItem
                Eachdestination={eachDestination}
                key={eachDestination.id}
              />
            ))}
          </ul>
        </dvi>
      </div>
    )
  }
}

export default DestinationSearch
