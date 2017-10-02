import {ReduceStore}   from 'flux/utils'
import qs              from 'qs'
import moment          from 'moment'

import Dispatcher      from './appDispatcher'
import Actions         from '../actions'
import defaultConfig   from '../modules/config'

const mountPoint = document.getElementById('mount-point')
var token = mountPoint.getAttribute('data-token')

console.log('Your data token today is: ' + token)

const defaultState = () => {
  return {
    savvy: 'savvy_react_template',
    repo: ''
  }
}

class AppStore extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    return defaultState()
  }

  getSavvyState() {
    return Object.values(this.getState().savvy)
  }

  getRepoState() {
    return `http://github.com/SavvySoftWorksLLC/savvy_react_template`
  }

  reduce(state, action) {
    switch (action.type) {
      case Actions.BOOT:
        return Object.assign({}, defaultState(), action.payload)
      case Actions.LOAD_SAVVY:
        return Object.assign({}, defaultState(), action.payload)
      case Actions.NOTES:
        return Object.assign({}, state, action.payload)
      default:
        return state
    }
  }
}

export default new AppStore()
