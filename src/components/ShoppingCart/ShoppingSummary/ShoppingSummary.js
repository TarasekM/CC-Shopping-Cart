import styles from './ShoppingSummary.module.scss';

import Button from './../../Buttons/Button';

const ShoppingSummary = (props) =>{
    return (
        <div className={styles.ShoppingSummary}>
            <div className={`${styles.TwoItemFlex} ${styles.Shipping} ${styles.Conspicuous}`}>
                <p>{props.shoppingSummaryText.shipping}</p>
                <p>${props.totals.shippingPrice}</p>
            </div>
            <div className={styles.TotalsContainer}>
                <div className={`${styles.CartTotals} ${styles.Conspicuous}`}>
                    {props.shoppingSummaryText.cartTotals}
                </div>
                <div className={`${styles.TwoItemFlex} ${styles.SubTotal}`}>
                    <p className={styles.GreyedOut}>{props.shoppingSummaryText.subTotal}</p>
                    <p>${props.totals.subtotal}</p>
                </div>
                <hr />
                <div className={`${styles.TwoItemFlex} ${styles.GrandTotal}`}>
                    <p className={styles.GreyedOut}>{props.shoppingSummaryText.grandTotal}</p>
                    <p className={styles.Greater}>${props.totals.grandTotal}</p>
                </div>
                <div className={styles.ProceedButtonContainer}>
                    <Button 
                        text={props.shoppingSummaryText.proceedButtonText}
                        onClickFunction={props.orderSubmited}/>
                </div>
            </div>
        </div>  
    );
}

export default ShoppingSummary;