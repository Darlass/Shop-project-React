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
        totalCount: 10,
        totalPrice: 110,
    })

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header cartData={cartData} />
            <Main />
        </StyledEngineProvider>
    )
}
export default App
