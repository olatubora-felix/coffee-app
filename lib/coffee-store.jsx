import { fetchApi } from './fetchapi'

import { useContext } from 'react'
import { StoreContext } from '../context/store'
import { unsplashapi } from './unsplashapi'

export const fetchData = async (
    latLong = '6.349175869222041,3.4576552235417135',
    limit = 6,
    search = 'coffee'
) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY,
        },
    }

    const response = await fetch(fetchApi(search, latLong, limit), options)
    const data = await response.json()
    const unsplashResults = await unsplashapi(search)
    return data?.results.map((result, i) => {
        const address = result.location.formatted_address
        const region = result.location.region
        return {
            id: result.fsq_id,
            name: result.name,
            address: address ? address : null,
            region: region ? region : null,
            imgUrl: unsplashResults.length > 0 ? unsplashResults[i] : null,
        }
    })
}
