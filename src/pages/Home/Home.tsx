import { Typography } from '@mui/material'
import ProductsList from 'components/Products/ProductsList'

type Props = {
    addToCart: (count: number, price: number) => void
}

const Home = ({ addToCart }: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                align="center"
                sx={{ marginBottom: '20px' }}
            >
                List of products
            </Typography>
            <ProductsList addToCart={addToCart} />
        </>
    )
}
export default Home
