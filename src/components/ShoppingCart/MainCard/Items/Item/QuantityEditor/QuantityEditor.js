import styles from './QuantityEditor.module.scss';


const QuantityEditor = (props) => {
    return (
        <div className={styles.QuantityEditor}>
            <button className={styles.QuantityButton}> - </button>
            <input className={styles.QuantityInput} value={props.quantity}/>
            <button className={styles.QuantityButton}>+</button>
            
            <img src={'./images/edit-img.png'} />
        </div>
    );
}

export default QuantityEditor;