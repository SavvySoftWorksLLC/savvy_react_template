import React    from 'react'
import ReactDOM from 'react-dom'
import jquery   from 'jquery'

import AppContainer from './components/appContainer'

const mountPoint = document.getElementById('mount-point')

ReactDOM.render(
  <AppContainer originalElement={mountPoint} />,
  mountPoint
)
