import {Component} from 'react'

import FeedbackItems from '../FeedbackItems'

import './index.css'

class Feedback extends Component {
  state = {isClicked: false}

  afterClickingTheEmoji = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked} = this.state

    const {resources} = this.props

    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="main-container">
        <div className="sub-container">
          {!isClicked && (
            <div className="initial-heading-container">
              <h1 className="heading">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="ul-list-container">
                {emojis.map(eachFeedback => (
                  <FeedbackItems
                    eachFeedback={eachFeedback}
                    key={eachFeedback.id}
                    afterClickingTheEmoji={this.afterClickingTheEmoji}
                  />
                ))}
              </ul>
            </div>
          )}

          {isClicked && (
            <div className="love-emoji-container">
              <img src={loveEmojiUrl} className="love-emoji" alt="love emoji" />
              <h1 className="thankyou">Thank You</h1>
              <p className="description">
                We will use your feedback to improve our customer support
                performance.
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Feedback
