import React, { Fragment } from 'react'
import Card from '../card/Card'
import styles from '../../styles/Home.module.css'
import { Fade } from 'react-awesome-reveal'

const CoffeeStoresItem = ({ coffeeStores, heading }) => {
    return (
        <Fragment>
            {coffeeStores.length > 0 && (
                <div className={styles.sectionWrapper}>
                    <h2 className={styles.heading2}>{heading}</h2>
                    <div className={styles.cardLayout}>
                        {coffeeStores.map((coffeeStore) => (
                            <Card
                                name={coffeeStore.name}
                                imgUrl={
                                    coffeeStore.imgUrl ||
                                    'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
                                }
                                href={`/coffee-store/${coffeeStore.id}`}
                                className={styles.card}
                                key={coffeeStore.id}
                            />
                        ))}
                    </div>
                </div>
            )}
        </Fragment>
    )
}

export default CoffeeStoresItem
