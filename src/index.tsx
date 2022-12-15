import React from 'react'
import ReactDOM from 'react-dom/client'

// JSX
const h1 = <h1 id="biba" className="habiba">Hello World</h1>

// without JSX
// const h1 = React.createElement(
//     'h1',
//     { id: 'title', class: 'biba' },
//     'Hello React'
// ) // ('элемент', атрибуты элемента,'контнет')

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode><App /></React.StrictMode >)
