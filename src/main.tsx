import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { baseApi } from './redux/api/api.ts'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    
    <Provider store={store}>
      
        <App />
      
      
    </Provider>
   
  </React.StrictMode>
);
