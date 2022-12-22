import React from 'react'
import ReactDOM from 'react-dom/client'
import Content from './Content' // 2.Обязательно импортируем


type TitleProps = { // название пропсов пишем с большой буквы(PascalCase)
    subtitle: string | number // 2) Описали тип данныхs
    text?: string // Знак ? означает что этот пропр необязательный
}

const Title = ({ subtitle, text = "Cry" }: TitleProps) => { // 1) Описали данные, если не задают text то можно ставить ее по умолчанию
    return (<h1>{text} {subtitle}</h1>) // деструктуризация пропса
}

const App = () => {
    return ( // 3) Вывели данные 3. Выводим компонент на страницу
        <>
            <Title subtitle="Anime" />
            <Content />
        </>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode><App /></React.StrictMode >)
