import Header from 'containers/Header/Header'
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'containers/Main/Main'

type Props = {}
const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Main />
        </StyledEngineProvider>
    )
}
export default App