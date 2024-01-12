import {Component} from 'react'
import './index.css'

class TextInput extends Component {
  state = {isSaved: false, value: ''}

  onChangeTextInput = event => {
    this.setState({value: event.target.value})
  }

  onChangeButton = () => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  render() {
    const {isSaved, value} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Editable Text Input</h1>
          <div className="input-container">
            {isSaved ? (
              <div className="data-container">
                <p>{value}</p>
                <button type="button" onClick={this.onChangeButton}>
                  Edit
                </button>
              </div>
            ) : (
              <div className="data-container">
                <input
                  type="text"
                  value={value}
                  onChange={this.onChangeTextInput}
                />
                <button type="button" onClick={this.onChangeButton}>
                  Save
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default TextInput
