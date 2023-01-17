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
}

type Props = {}

const ProductsList = (props: Props) => {
    return (
        <>
            <Grid container direction="row" alignItems="center" spacing={4}>
                {productsArray.map(({ title, desc, type, capacity, price, image }: productsArray, i) => (
                    <Grid item xs={12} sm={6} md={4} key={i}>
                        <ProductsListItem
                            title={title}
                            desc={desc}
                            type={type}
                            capacity={capacity}
                            price={price}
                            image={image}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default ProductsList
