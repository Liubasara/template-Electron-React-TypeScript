// src/react.tsx
import * as React from 'react'
import * as ReactDOM from 'react-dom'

const Index = () => {
  return <div style={{ color: 'red' }}>Hello React!</div>
}

ReactDOM.render(<Index />, document.getElementById('app'))
