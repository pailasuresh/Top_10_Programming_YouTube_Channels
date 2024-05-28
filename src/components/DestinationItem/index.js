import './index.css'

const DestinationItem = props => {
  const {Eachdestination} = props
  const {imgUrl, name, link} = Eachdestination

  return (
    <li className="li-element">
      <img src={imgUrl} className="city" alt={name} />
      <p className="p">{name}</p>
      <a href={link}>Channel Link</a>
    </li>
  )
}

export default DestinationItem
