import styles from './EmptyCart.module.scss';

const EmptyCart = (props) => {
    return (
        <div className={styles.EmptyCart}>
            {props.emptyCartInfo}
        </div>
    );
}

export default EmptyCart;