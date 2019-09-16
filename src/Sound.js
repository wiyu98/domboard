import React, { Component } from 'reactn';

class Sound extends Component {
  constructor(props) {
    super(props)

    this.playSound = this.playSound.bind(this)
  }

  playSound() {
    const audio = new Audio(require("../public/sounds/" + this.props.url + ".mp3"))
    audio.play()
    this.setGlobal({
      num: this.global.num + 1
    })
  }

  render() {
    return (
      <div className={"btn"} onClick={this.playSound} style={{fontSize: this.props.size}}>
        {this.props.name}
      </div>
    );
  }
}

export default Sound