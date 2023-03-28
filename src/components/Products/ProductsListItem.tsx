import { Button, Card, CardActions, CardContent, TextField } from "@mui/material";
import { useState } from 'react'
import './ProductsListItem.scss'

type Props = {
    title: string
    desc: string
    type: string
    capacity: string
    price: number
    image: string
};

const ProductsListItem = ({ title, desc, type, capacity, price, image }: Props) => {

    const [count, setCount] = useState<number>(0) // конст массив [название стейта, функция для стейта с ключевым словом set+Название стейта]
    const onIncrement = () => {
        setCount((prevState: number) => prevState + 1)
    }
    const onDecrement = () => {
        setCount((prevState: number) => prevState - 1)
    }

    const [color, setColor] = useState<string>(`green`)
    const changeColor = () => {
        setColor((prevState: string) => { //  скороченный варинат с тернарными операторами prevState === `green` ? `red` : `green`
            if (prevState === `green`) {
                return `red`
            } else {
                return `green`
            }
        })
    }


    return <>
        <Card className="product-list-item">
            <CardContent>
                <div className="product-img">
                    <img src={image} alt="" />
                </div>
                <h4 className="product-title">{title}</h4>
                <p className="product-desc">{desc}</p>
                <div className="product-features"><span>Type:</span>{type}</div>
                <div className="product-features"><span>Capacity:</span>{capacity} gb</div>
                <p className="product-features"> <span>Color:</span>{color}</p>
                <button onClick={() => changeColor()}>Change color</button>
                <div className="product-price">{price}$</div>
                <div className="product-quantity">
                    <Button variant="outlined" onClick={() => onDecrement()}>-</Button>
                    <TextField size="small" value={count} />
                    <Button variant="outlined" onClick={() => onIncrement()}>+</Button>
                </div>
            </CardContent>
            <CardActions className="but-wrap">
                <Button variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>
    </>;
};

export default ProductsListItem;
