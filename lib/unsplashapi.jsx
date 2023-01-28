import { useContext } from 'react'
import { createApi } from 'unsplash-js'
import { StoreContext } from '../context/store'

const unsplash = createApi({
    accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
})

export const unsplashapi = async (search) => {
    const photos = await unsplash.search.getPhotos({
        query: search,
        page: 1,
        perPage: 40,
    })

    return photos.response.results.map((result) => result.urls['small'])
}
