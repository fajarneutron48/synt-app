import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

import 'startbootstrap-sb-admin-2/vendor/fontawesome-free/css/all.min.css'
import 'startbootstrap-sb-admin-2/css/sb-admin-2.min.css'
import './assets/jquery.min.js'
import 'startbootstrap-sb-admin-2/vendor/bootstrap/js/bootstrap.bundle.min.js'
import 'startbootstrap-sb-admin-2/vendor/jquery-easing/jquery.easing.min.js'
import 'startbootstrap-sb-admin-2/js/sb-admin-2.min.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
