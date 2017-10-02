import AppView     from './AppView'
import {Container} from 'flux/utils'

import Actions    from '../actions'
import Dispatches from '../actions/dispatches'
import AppStore   from '../stores/appStore'
import Dispatcher from '../stores/appDispatcher'

function getStores() {
  return [AppStore]
}

function getState(prevState, props) {
  return {
    events: AppStore.getState(),
    originalElement: props.originalElement,

    loadSavvy: () => {
      Dispatcher.dispatch({
        type: Actions.LOAD_SAVVY,
        payload
      })
    }
  }
}

export default Container.createFunctional(AppView, getStores, getState, {withProps: true})
