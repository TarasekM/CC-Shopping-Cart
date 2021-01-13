import styles from './MainCard.module.scss';

import Button from './../../Buttons/Button';

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

            <div className={styles.UpdateButtonContainer}>
                <Button 
                    text={props.mainCardText.updateButtonText}
                    additionalStyle={styles.Bold}
                    />
            </div>

        </div>
    )
}

export default MainCard;