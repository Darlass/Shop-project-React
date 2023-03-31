type Props = {
    cartData: {
        totalCount: number
        totalPrice: number
    }
}

const CartHeader = ({ cartData }: Props) => {
    return (
        <div className="cart-header">
            <div className="cart-item">
                <span>Quantity</span> {cartData.totalCount}
            </div>
            <div className="cart-item">
                <span>Price</span> ${cartData.totalPrice}
            </div>
        </div>
    )
}
export default CartHeader
