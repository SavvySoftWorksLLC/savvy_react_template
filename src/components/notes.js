import React from 'react'

import Dispatches from '../actions/dispatches'
import Store      from '../stores/appStore'

import Loading from '../components/loading'

const notesStyle = {
  marginTop: '2em',
  padding: '1em',
  backgroundColor: '#AAAAAA',
  color: '#FFFFFF',
  border: '1px solid #000000',
  borderRadius: '8px'
}

class Notes extends React.Component {

  constructor(){
    super()
    this.state = {loaded: false}
  }

  componentDidMount(){
    Dispatches.boot({
      originalElement: this.props.originalElement
    })
    Dispatches.notes()
    this.setState({loaded: true})
  }

  render(){
    if(this.state.loaded) {
      return (
        <div style={notesStyle}>
          <p>Notes:</p>
          <ul>
            <li>This block uses CSS as a constant from inside React</li>
          </ul>
        </div>
      )
    } else {
      return <span><Loading /></span>
    }
  }
}

export default Notes
