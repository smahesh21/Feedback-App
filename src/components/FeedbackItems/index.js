import './index.css'

const FeedbackItems = props => {
  const {eachFeedback, afterClickingTheEmoji} = props
  const {name, imageUrl} = eachFeedback
  const onClickFeedback = () => {
    afterClickingTheEmoji()
  }

  return (
    <li className="list-container">
      <img
        src={imageUrl}
        className="image"
        alt={name}
        onClick={onClickFeedback}
      />
      <p className="description">{name}</p>
    </li>
  )
}

export default FeedbackItems
