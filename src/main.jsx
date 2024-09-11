import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppContextProvider } from './components/ShopContext.jsx'
import { ItemProvider } from './components/ItemsContext.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AppContextProvider>
            <ItemProvider>
                <App />
            </ItemProvider>
        </AppContextProvider>
    </StrictMode>
)
