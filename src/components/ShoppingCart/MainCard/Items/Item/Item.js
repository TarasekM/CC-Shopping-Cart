import styles from './Item.module.scss';

import QuantityEditor from './QuantityEditor/QuantityEditor';


const Item = (props) => {
    return (
        <div className={styles.Item}>
            <div className={styles.Delete}>
                <img
                    src={'./images/x-img.png'}
                    alt="Delete"
                    onClick={() => props.deleteItem(props.item.id)} />
            </div>
            <img src={`./images/${props.item.image}`} />
            <p className={styles.ProductName}>
                {props.item.name}
            </p>
            <p className={styles.UnitPrice}>
                ${props.item.price.toFixed(2)}
            </p>
            <QuantityEditor
                quantity={props.item.quantity}
                id={props.item.id}
                setQuantity={props.setQuantity}
                updateTotals={props.updateTotals}/>
        </div>
    );
}

export default Item;