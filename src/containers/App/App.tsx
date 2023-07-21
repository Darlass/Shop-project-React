import Header from 'containers/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'containers/Main/Main'
import { useState } from 'react'

type CartDataProps = {
    // удалить
    totalCount: number
    totalPrice: number
}

type ProdcuctsInCartProps = {
    [id: number]: number // Айди записываем в квадртаных скобках, потому что это динамические даные.
}

const App = () => {
    const [cartData, setCartData] = useState<CartDataProps>({
        // удалить
        totalCount: 0,
        totalPrice: 0,
    })
 // Товары в корзину нужно добавлять по количеству и значению 
    const [productsInCart, setProductsInCart] = useState<ProdcuctsInCartProps>({
        // этот обьект динамичный
        1: 5, // айди = ключ, ко-ство = значение
        2: 5,
    })

    const addToCart = (count: number, price: number) => {
        setCartData((prevState: CartDataProps) => ({
            // удалить, добавить новую функцию которая будет добавлять данные в обьект.
            totalCount: prevState.totalCount + count,
            totalPrice: prevState.totalPrice + count * price,
        }))
    }
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header cartData={cartData} />
            <Main addToCart={addToCart} />
        </StyledEngineProvider>
    )
}
export default App
