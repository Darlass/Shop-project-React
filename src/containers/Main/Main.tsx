import Container from '@mui/material/Container'
import Home from 'pages/Home/Home'

type Props = {
    addToCart: (count: number, price: number) => void
}

const Main = ({ addToCart }: Props) => {
    return (
        <>
            <main style={{ padding: '40px 0' }}>
                <Container maxWidth="lg">
                    <Home addToCart={addToCart} />
                </Container>
            </main>
        </>
    )
}
export default Main
