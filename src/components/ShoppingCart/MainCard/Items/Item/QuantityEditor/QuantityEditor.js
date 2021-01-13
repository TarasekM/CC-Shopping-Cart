import styles from './QuantityEditor.module.scss';


const QuantityEditor = (props) => {
    return (
        <div className={styles.QuantityEditor}>
            <button
                className={styles.QuantityButton}
                onClick={() => props.setQuantity(props.id, props.quantity - 1)}>
                 - 
            </button>
            <input
                className={styles.QuantityInput}
                value={props.quantity}
                readOnly/>
            <button
                className={styles.QuantityButton}
                onClick={() => props.setQuantity(props.id, props.quantity + 1)}>
                + 
            </button>
            
            <img src={'./images/edit-img.png'} alt='Update Cart' onClick={props.updateTotals}/>
        </div>
    );
}

export default QuantityEditor;