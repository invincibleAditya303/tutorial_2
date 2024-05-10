import DestinationItem from '../DestinationItem'
import './index.css'

const DestinationSearch = props => {
  const {destinationsList, onChangeInput, event} = props

  const onChangeSearchInput = () => onChangeInput(event)

  return (
    <div className="destination-bg-container">
      <h1 className="destination-heading">Destination Search</h1>
      <div className="input-container">
        <input type="search" onChange={onChangeSearchInput} />
        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          className="search-img"
          alt="search icon"
        />
      </div>
      <ul className="destination-container">
        {destinationsList.map(eachDestination => (
          <DestinationItem
            imgUrl={eachDestination.imgUrl}
            name={eachDestination.name}
            key={eachDestination.id}
          />
        ))}
      </ul>
    </div>
  )
}

export default DestinationSearch
