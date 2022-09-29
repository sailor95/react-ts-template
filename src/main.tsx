import React from 'react'
import reactDom from 'react-dom'

import App from './App'
import { inDev } from '@utils/helpers'

console.log('App Start')

reactDom.render(<App />, document.getElementById('root'))

if (inDev() && module.hot) module.hot.accept()
