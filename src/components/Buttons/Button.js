import React from 'react';

import styles from './Button.module.scss';

const Button = (props) => {
    return(
        <div className={styles.ShoppingCartButton}>
            <button onClick={props.onClickFunction}>
                {props.text}
            </button>
        </div>
    );
}


export default Button;