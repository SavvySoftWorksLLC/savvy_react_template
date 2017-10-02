import React from 'react'

import Dispatches from '../actions/dispatches'
import Store      from '../stores/appStore'

import Notes from '../components/notes'
import Loading from '../components/loading'

class LoadSavvy extends React.Component {

  constructor(){
    super()
    this.state = {loaded: false}
  }

  componentDidMount(){
    Dispatches.boot({
      originalElement: this.props.originalElement
    })
    Dispatches.loadSavvy()
    this.setState({loaded: true})
  }
  
  render(){
    if(this.state.loaded) {
      let savvy = Store.getSavvyState()
      let repo = Store.getRepoState()
      return (
        <div>
          <div>
            {savvy}
          </div>
          <div>
            <a href={repo}>{repo}</a>
          </div>
          <Notes />
        </div>
      )
    } else {
      return <span><Loading /></span>
    }
  }
}

export default LoadSavvy
