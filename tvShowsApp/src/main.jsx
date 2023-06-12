import React from 'react'
import ReactDOM from 'react-dom/client'
import TvShowsApp from './TvShowApps'
import {
  BrowserRouter
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <TvShowsApp />
    </BrowserRouter>
  </React.StrictMode>,
)
