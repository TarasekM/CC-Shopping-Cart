import styles from './Items.module.scss';

import Item from './Item/Item';

const Items = (props) => {
    const getItems = (listOfItems) => {

        if (!listOfItems){
            return;
        }

        return listOfItems.map((item) => {
          return (
            <Item
                key={item.id}
                item={item}
                setQuantity={props.setQuantity}
                updateTotals={props.updateTotals}
                deleteItem={props.deleteItem}
            />
            )
        });
    }

    const items = getItems(props.items);

    return (
        <div className={styles.Items}>
            {items}
        </div>
    );
}

export default Items;