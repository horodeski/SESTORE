import React from 'react'
import { Card } from '..'
import "../../../assets/styles/App.css"
import styles from "../Dashboard.module.css"

function LatesteCategories() {
    return (
        <div className={styles.searchAll}>
            <div className={styles.search}>
                <h2>Categorias recentes
                    <span>
                        (10 últimos)
                    </span>
                </h2>
                <div className={styles.inputButton}>
                    <input placeholder='Pesquise por nome do produto...' />
                    <button className='btn-gray'>Pesquisar</button>
                </div>
                <div className={styles.allCards}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}


export default LatesteCategories