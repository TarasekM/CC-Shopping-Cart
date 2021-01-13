import styles from './Item.module.scss';

import QuantityEditor from './QuantityEditor/QuantityEditor';


const Item = (props) => {
    return (
        <div className={styles.Item}>
            <div className={styles.Delete}>
                <img src={'./images/x-img.png'} />
            </div>
            <img src={props.item.image} />
            <p className={styles.ProductName}>
                {props.item.productName}
            </p>
            <p className={styles.UnitPrice}>
                {props.item.unitPrice}
            </p>
            <QuantityEditor quantity={props.item.quantity}/>
        </div>
    );
}

export default Item;