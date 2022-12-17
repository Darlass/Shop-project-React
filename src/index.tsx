import React from 'react'
import ReactDOM from 'react-dom/client'
// деструктуризация обьекта
const user = {
    age: 20,
    name: "Valeria",
    property: "nothing"
}
const { age, name, property } = user
// деструктуризация массива
const array = [1, 2, 3, 4, 5]
const [test1, test2, ...test3] = array





const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode></React.StrictMode >)
