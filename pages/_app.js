import '../styles/globals.css'
import { IBM_Plex_Serif } from '@next/font/google'
import { createContext } from 'react'

const ibm = IBM_Plex_Serif({
    weight: ['100', '200', '400', '500', '700'],
    subsets: ['latin'],
})

const StoreContext = createContext()
const initialState = {
    latLog: '',
    coffeeStores: [],
}
const StoreContextProvider = ({ children }) => {
    return (
        <StoreContext.Provider value={{ state: initialState }}>
            {children}
        </StoreContext.Provider>
    )
}
export default function App({ Component, pageProps }) {
    return (
        <main className={ibm.className}>
            <StoreContextProvider>
                <Component {...pageProps} />
            </StoreContextProvider>
        </main>
    )
}
