import React from 'react';

import styles from './ShoppingCart.module.scss';

// components
import Button from './../Buttons/Button';
import MainCard from './MainCard/MainCard';
import ShoppingSummary from './ShoppingSummary/ShoppingSummary';

const ShoppingCart = (props) => {
    return(
        <div className={styles.ShoppingCart}>
            <div className={styles.HeaderContainer}>
                <div className={styles.Title}>
                    {props.header.title}
                </div>
                <Button text={props.header.buttonText}/>
            </div>
            <div className={styles.MainContainer}>
                <MainCard 
                    mainCardText={props.mainCardText}
                    items={props.items}
                />
                <ShoppingSummary 
                    shoppingSummaryText={props.shoppingSummaryText}
                />
            </div>
        </div>
    );
}

export default ShoppingCart;