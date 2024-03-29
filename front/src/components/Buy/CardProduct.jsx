import Icon from "../Common/Icon"
import styles from "./Buy.module.css"

function CardProduct({ name, category, description, price, toggleCart }) {

    return (
        <div className={styles.productCard}>
            <div className={styles.titlePrice}>
                <span className={styles.title}>{name}</span>
                <span>R${price}</span>
            </div>
            <span>{category}</span>
            <p>{description}</p>
            <div className={styles.right}>
                <div className={styles.allButtons} onClick={toggleCart}>
                    <button className='btn-green'>
                        Adicionar ao carrinho
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardProduct