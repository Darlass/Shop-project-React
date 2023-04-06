import Header from 'containers/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'containers/Main/Main'
import { useState } from 'react'

type CartDataProps = {
    totalCount: number
    totalPrice: number
}
const App = () => {
    const [cartData, setCartData] = useState<CartDataProps>({
        totalCount: 0,
        totalPrice: 0,
    })
    const addToCart = (count: number, price: number) => {
        setCartData((prevState: CartDataProps) => ({
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
