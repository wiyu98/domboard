import React, { Component } from 'reactn';
import Sound from "./Sound"

let quotes = require("./quotes.json")
let sounds = require("./sounds.json")

class App extends Component {
  constructor(props) {
    super(props)

    this.setGlobal({
      num: 0
    })

    var stuff = []
    quotes[Math.floor(Math.random() * quotes.length)].split(" ").forEach(word => {
      var w = {}
      w.word = word
      w.url = sounds[Math.floor(Math.random() * sounds.length)]
      w.size = Math.floor(Math.random() * 100) + 50
      stuff.push(w)
    })

    this.state = {
      stuff: stuff
    }
  }

  render() {
    return (
      <center>
        <div id="content">
          <h1>The DOM Board #{this.global.num}</h1>
          <div id="sounds">
            {this.state.stuff.map(w => {
              return <Sound
                name={w.word}
                url={w.url}
                size={w.size} />
            })}
          </div>
        </div>
      </center>
    );
  }
}

export default App;
