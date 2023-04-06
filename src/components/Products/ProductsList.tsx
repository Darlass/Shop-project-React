import ProductsListItem from './ProductsListItem'
import { Grid } from '@mui/material'
import productsArray from './productArray'

type productsArray = {
    title: string
    desc: string
    type: string
    capacity: string
    price: number
    image: string
    id: number
}

type Props = {
    addToCart: (count: number, price: number) => void
}

const ProductsList = ({ addToCart }: Props) => {
    return (
        <>
            <Grid container direction="row" alignItems="center" spacing={4}>
                {productsArray.map(
                    ({
                        title,
                        desc,
                        type,
                        capacity,
                        price,
                        image,
                        id,
                    }: productsArray) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductsListItem
                                title={title}
                                desc={desc}
                                type={type}
                                capacity={capacity}
                                price={price}
                                image={image}
                                addToCart={addToCart}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ProductsList
