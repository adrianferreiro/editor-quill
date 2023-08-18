import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { VistaPrevia } from './vistaPrevia.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        {/* <Route path='/vistaPrevia' element={<VistaPrevia />} /> */}
        <Route path='/vistaPrevia' element={<VistaPrevia />} />
        </Routes>
    </BrowserRouter>
  // </React.StrictMode>,
)
