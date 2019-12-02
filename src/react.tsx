// src/react.tsx
import * as React from 'react'

import * as ReactDOM from 'react-dom'

const isDev = process.env.NODE_ENV === 'development'

const Index = () => {
  return (
    <div style={{ color: 'red' }}>
      Hello React!
      {isDev && <div>DEV</div>}
    </div>
  )
}

ReactDOM.render(<Index />, document.getElementById('app'))
