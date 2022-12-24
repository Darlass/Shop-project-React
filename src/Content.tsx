import classes from './Content.module.scss'

type ContentProps = {
    p1: string
    p2: string
}
const Content = ({ p1, p2 }: ContentProps) => {
    return (
        <>
            <p className={`${classes.love} ${classes['font']}`}>{p1}</p>
            <p>{p2}</p>
        </>
    )
}
export default Content