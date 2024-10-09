import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import store from './Redux/store.jsx';
import {Provider} from 'react-redux';
import{BrowserRouter}from 'react-router-dom'
// store.subscribe(()=> console.log(store.getState()));
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <Provider store={store} >
    <App />
    <ToastContainer/>
  </Provider>
  </BrowserRouter>
  </StrictMode>,
)
