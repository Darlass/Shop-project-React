import React from 'react'
import ReactDOM from 'react-dom/client'

//Компонент - функция
function FirstApp() {
    return (
        <div>
            <h1>Hello react!</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                dolore perspiciatis aperiam, ex modi quis dignissimos quod. Eos non,
                praesentium officiis esse, ipsum rerum earum nesciunt libero laborum
                mollitia labore
            </p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode><FirstApp /></React.StrictMode >)
