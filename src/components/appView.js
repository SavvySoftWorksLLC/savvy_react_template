import React from "react"

import ClassNames from 'classnames'

import Store      from '../stores/appStore'
import Section   from './section'
import LoadSavvy from './loadSavvy'

function AppView(props) {
  return (
    <Section className="text-left" elementId="mount-point">
      <LoadSavvy originalElement={props.originalElement} />
    </Section>
  );
}

export default AppView
