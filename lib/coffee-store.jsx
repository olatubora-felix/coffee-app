import { fetchApi } from './fetchapi'
import { unsplashapi } from './unsplashapi'

export const fetchData = async () => {
    const unsplashResults = await unsplashapi()
    console.log(unsplashResults)
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: process.env.FOURSQUARE_API_KEY,
        },
    }

    const response = await fetch(
        fetchApi('coffee', '6.349175869222041%2C3.4576552235417135', 6),
        options
    )
    const data = await response.json()
    return data.results
}
