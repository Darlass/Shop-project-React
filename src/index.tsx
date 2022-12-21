import React from 'react'
import ReactDOM from 'react-dom/client'


type TitleProps = { // название пропсов пишем с большой буквы(PascalCase)
    subtitle: string | number // 2) Описали тип данныхs
    text?: string // Знак ? означает что этот пропр необязательный
}

const Title = ({ subtitle, text = "Cry" }: TitleProps) => { // 1) Описали данные, если не задают text то можно ставить ее по умолчанию
    return (<h1>{text} {subtitle}</h1>) // деструктуризация пропса
}

const Content = () => {
    return (
        <>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, optio, laborum similique quo consequatur a incidunt maxime sapiente esse tempora atque, quod molestias eveniet omnis magnam odit nostrum nisi reiciendis!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsam explicabo commodi voluptas sapiente placeat quidem necessitatibus a ab! Iusto ullam sapiente hic officia vero dolores laboriosam asperiores officiis maxime.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error modi cumque delectus quas laboriosam incidunt nesciunt doloremque odio excepturi dolores aut, magni, quos amet esse eius maiores nisi molestiae.</p>
        </>
    )
}

const App = () => {
    return ( // 3) Вывели данные
        <>
            <Title subtitle="Anime" />
            <Title text="Hello" subtitle="React" />
            <Content />
        </>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode><App /></React.StrictMode >)
