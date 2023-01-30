import { fetchData } from '../../lib/coffee-store'

const getCoffeeStoresByLocation = async (req, res) => {
    try {
        const { latLong, limit, search } = req.query
        const response = await fetchData(latLong, limit, search)
        res.status(200)
        res.json(response)
    } catch (err) {
        console.error('There is an error', err)
        res.status(500)
        res.json({ message: 'Oh no! Something went wrong', err })
    }

    //return
}

export default getCoffeeStoresByLocation
