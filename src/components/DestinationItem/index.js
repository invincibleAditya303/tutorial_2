import './index.css'

const DestinationItem = props => {
  const {name, imgUrl, key} = props

  return (
    <li>
      <img src={imgUrl} className="destination-img" alt={name} />
      <p className="destination-name">{name}</p>
    </li>
  )
}

export default DestinationItem
