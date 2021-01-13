import styles from './MainCard.module.scss';

import Button from './../../Buttons/Button';
import Items from './Items/Items';

const MainCard = (props) => {
    return(
        <div className={styles.MainCard}>
            <div className={styles.MainCardHeader}>
                <div className={styles.TableHeader}>
                    <p>{props.mainCardText.productName}</p>
                    <p>{props.mainCardText.unitPrice}</p>
                    <p>{props.mainCardText.quantity}</p>
                </div>
            </div>
            <Items 
                items={props.items}
                setQuantity={props.setQuantity}
                updateTotals={props.updateTotals}
                deleteItem={props.deleteItem}
                />
            <div className={styles.UpdateButtonContainer}>
                <Button 
                    text={props.mainCardText.updateButtonText}
                    additionalStyle={styles.Bold}
                    onClickFunction={props.updateTotals}
                    />
            </div>

        </div>
    )
}

export default MainCard;