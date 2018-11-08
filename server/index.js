import path from 'path'
import Loadable from 'react-loadable'

import config from './config'
import app from './app'


const { port } = config

const uri = 'http://localhost:' + port

Loadable.preloadAll().then(() => {
  app.listen(port, () => {
    console.log('> Listening at ' + uri + '\n')
  })
})
