import classNames from 'classnames'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import coffeeStores from '../../data/coffee-stores.json'
import style from '../../styles/coffee-store.module.css'
import { fetchData } from '../../lib/coffee-store'

const Details = ({ coffeeStore }) => {
    const router = useRouter()

    const handleUpVoteButton = () => {
        console.log('object')
    }
    if (router.isFallback) {
        return <div>Loading...</div>
    }
    const { address, region, name, imgUrl } = coffeeStore
    return (
        <div className={style.layout}>
            <Head>
                <title>{name}</title>
            </Head>
            <div className={style.container}>
                <div className={style.col1}>
                    <div className={style.backToHomeLink}>
                        <Link href={'/'}>← Back Home</Link>
                    </div>
                    <div className={style.nameWrapper}>
                        <h1 className={style.name}>{name}</h1>
                    </div>
                    <Image
                        src={
                            imgUrl ||
                            'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
                        }
                        alt={name}
                        width={700}
                        height={400}
                        className={style.storeImg}
                    />
                </div>
                <div className={classNames('glass', style.col2)}>
                    {address && (
                        <div className={style.iconWrapper}>
                            <Image
                                src="/assets/icons/places.svg"
                                alt={address ? address : 'address'}
                                width="24"
                                height="24"
                            />
                            <p className={style.text}>{address}</p>
                        </div>
                    )}
                    {region && (
                        <div className={style.iconWrapper}>
                            <Image
                                src="/assets/icons/nearMe.svg"
                                alt="region"
                                width="24"
                                height="24"
                            />
                            <p className={style.text}>{region}</p>
                        </div>
                    )}
                    <div className={style.iconWrapper}>
                        <Image
                            src="/assets/icons/star.svg"
                            alt="coffee count"
                            width="24"
                            height="24"
                        />
                        <p className={style.text}>1</p>
                    </div>
                    <button
                        className={style.upvoteButton}
                        onClick={handleUpVoteButton}
                    >
                        Up Vote!
                    </button>
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps({ params }) {
    const coffeeStores = await fetchData()
    const findCoffeeStoreByid = coffeeStores.find((coffeeStore) => {
        return coffeeStore.id.toString() === params.id
    })
    return {
        props: {
            coffeeStore: findCoffeeStoreByid ? findCoffeeStoreByid : {},
        }, // will be passed to the page component as props
    }
}
export const getStaticPaths = async () => {
    const coffeeStores = await fetchData()
    const paths = coffeeStores.map((coffeeStore) => {
        return { params: { id: String(coffeeStore.id) } }
    })
    return {
        paths,
        fallback: true, // can also be true or 'blocking'
    }
}

export default Details
