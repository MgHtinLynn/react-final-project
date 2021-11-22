import React, { StrictMode, lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
import AppFallback from './views/placeholders/app-fallback'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { Provider } from "react-redux"
import { ToastContainer } from 'react-toastify'
import { store } from './redux/storeConfig/store'

// ** Lazy load app
const LazyApp = lazy(() => import('./App'))

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<AppFallback />}>
      <StrictMode>
          <LazyApp />
          <ToastContainer newestOnTop />
      </StrictMode>
    </Suspense>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
