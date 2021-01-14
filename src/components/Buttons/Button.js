import React from 'react';

import styles from './Button.module.scss';

const Button = (props) => {
    const buttonStyle = (additionalStyle) => {
        if (!additionalStyle){
            return styles.ShoppingCartButton;
        }
        return `${styles.ShoppingCartButton} ${additionalStyle}`;
    }
    return(
        <div className={buttonStyle(props.additionalStyle)}>
            <button className={styles.Button} onClick={props.onClickFunction}>
                {props.text}
            </button>
        </div>
    );
}


export default Button;