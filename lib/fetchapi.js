export const fetchApi = (query, laglog, limit) => {
    return `${process.env.BASE_URL}/v3/places/search?query=${query}&ll=${laglog}&limit=${limit}`
}
