import { createContext, useReducer } from 'react'
import { storeReducer } from './storeReducer'

export const StoreContext = createContext()
const initialState = {
    latLong: '',
    coffeeStores: [],
}
export const StoreContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(storeReducer, initialState)
    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    )
}
