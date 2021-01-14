import styles from './MainCard.module.scss';

import Button from './../../Buttons/Button';
import Items from './Items/Items';
import EmptyCart from './../../Informations/EmptyCart/EmptyCart';


const MainCard = (props) => {
    const Cart = () => {
        if (props.items.length < 1){
            return <EmptyCart emptyCartInfo={props.mainCardText.emptyCartInfo} />
        }
        return (
            <Items 
            items={props.items}
            setQuantity={props.setQuantity}
            updateTotals={props.updateTotals}
            deleteItem={props.deleteItem}
            />
        );
    }

    return(
        <div className={styles.MainCard}>
            <div className={styles.MainCardHeader}>
                <div className={styles.TableHeader}>
                    <p>{props.mainCardText.productName}</p>
                    <p>{props.mainCardText.unitPrice}</p>
                    <p>{props.mainCardText.quantity}</p>
                </div>
            </div>
            {Cart()}
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