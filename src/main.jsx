import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home/Home.jsx'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import './styles/global.css'

library.add(fas, faTwitter, faFontAwesome)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
