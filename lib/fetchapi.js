export const fetchApi = (query, laglog, limit) => {
    return `${process.env.NEXT_PUBLIC_BASE_URL}/v3/places/search?query=${query}&ll=${laglog}&limit=${limit}`
}
