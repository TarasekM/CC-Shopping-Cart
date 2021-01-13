import React from 'react';

import styles from './Button.module.scss';

const Button = (props) => {
    return(
        <div className={styles.ShoppingCartButton}>
            <button>
                {props.text}
            </button>
        </div>
    );
}


export default Button;