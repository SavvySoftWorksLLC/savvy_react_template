import Actions from './'
import Dispatcher from '../stores/appDispatcher'

const Dispatches = {
  boot: (payload) => {
    Dispatcher.dispatch({
      type: Actions.BOOT,
      payload
    })
  },
  loadSavvy: (payload) => {
    Dispatcher.dispatch({
      type: Actions.LOAD_SAVVY,
      payload
    })
  },
  notes: (payload) => {
    Dispatcher.dispatch({
      type: Actions.NOTES,
      payload
    })
  }
}


export default Dispatches
