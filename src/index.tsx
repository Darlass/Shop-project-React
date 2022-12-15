import React from 'react'
import ReactDOM from 'react-dom/client'

//Arrow foo
const Title = () => <h1>Hello arrow foo component</h1>
const Content = () => {
    return (
        <React.Fragment>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, optio, laborum similique quo consequatur a incidunt maxime sapiente esse tempora atque, quod molestias eveniet omnis magnam odit nostrum nisi reiciendis!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsam explicabo commodi voluptas sapiente placeat quidem necessitatibus a ab! Iusto ullam sapiente hic officia vero dolores laboriosam asperiores officiis maxime.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error modi cumque delectus quas laboriosam incidunt nesciunt doloremque odio excepturi dolores aut, magni, quos amet esse eius maiores nisi molestiae.</p>
        </React.Fragment>
    )
}

const App = () => {
    return (
        <React.Fragment>
            <Title />
            <Content />
        </React.Fragment>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode><App /></React.StrictMode >)
