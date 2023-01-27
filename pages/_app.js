import '../styles/globals.css'
import { IBM_Plex_Serif } from '@next/font/google'
import { StoreContextProvider } from '../context/store'

const ibm = IBM_Plex_Serif({
    weight: ['100', '200', '400', '500', '700'],
    subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
    return (
        <main className={ibm.className}>
            <StoreContextProvider>
                <Component {...pageProps} />
            </StoreContextProvider>
        </main>
    )
}
