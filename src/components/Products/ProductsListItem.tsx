import { Button, Card, CardActions, CardContent } from "@mui/material";
import './ProductsListItem.scss'

type Props = {};

const ProductsListItem = (props: Props) => {
    return <>
        <Card className="product-list-item">
            <CardContent>
                <h4 className="product-title">Iphone 14</h4>
                <p className="product-desc">Telephone from brand Apple. One of the best in the world.</p>
                <div className="product-features"><span>Type:</span> phone</div>
                <div className="product-features"><span>Capacity:</span> 64 gb</div>
                <div className="product-price">1000$</div>
            </CardContent>
            <CardActions className="but-wrap">
                <Button variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>
    </>;
};

export default ProductsListItem;
