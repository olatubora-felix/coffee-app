import { createApi } from 'unsplash-js'

const unsplash = createApi({
    accessKey: process.env.UNSPLASH_ACCESS_KEY,
})

export const unsplashapi = async () => {
    const photos = await unsplash.search.getPhotos({
        query: 'coffee shops',
        page: 1,
        perPage: 1,
    })

    return photos.response.results.map((result) => result.urls['small'])
}
