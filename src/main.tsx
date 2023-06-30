import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Ion } from "cesium";
Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjZjI5MWY5Yi05NGMyLTQ5MWMtYTBhNy0xMmE1ODljNDViOGMiLCJpZCI6MTUwMzYwLCJpYXQiOjE2ODgwODkzMTR9.jq10Z4x82L6jJwcRme_z-miyEuNcvZGQqBIaldkhh8g";
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
