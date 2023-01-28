import React, { useContext } from 'react'
import styles from './Banner.module.css'
import { StoreContext } from '../context/store'
import { ACTION_TYPES } from '../context/type'

const Banner = ({ buttonText, handleOnClickButton }) => {
    const { dispatch, state } = useContext(StoreContext)

    return (
        <section className={styles.container}>
            <h1 className={styles.title}>
                <span className={styles.title1}>Coffee</span>{' '}
                <span className={styles.title2}>Connoisseur</span>
            </h1>
            <p className={styles.subTitle}>Discover your local stores!</p>
            <form
                className={styles.buttonWrapper}
                onSubmit={handleOnClickButton}
            >
                <input
                    type="text"
                    onChange={(e) =>
                        dispatch({
                            type: ACTION_TYPES.SET_SEARCH_PLACES,
                            payload: { search: e.target.value },
                        })
                    }
                    className={styles.input}
                    value={state.search}
                />
                <button className={styles.button} type="submit">
                    {buttonText}
                </button>
            </form>
        </section>
    )
}

export default Banner
