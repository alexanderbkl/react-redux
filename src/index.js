import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './store'
import { Provider } from 'react-redux'
import ReactQuery from './ReactQuery'
import UseReducer from './UseReducer'
import App from './App'

//ReactQuery
import { QueryClient, QueryClientProvider } from 'react-query'
import { CounterContextProvider } from './CounterContext'

const queryClient = new QueryClient()








ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <QueryClientProvider client={queryClient}>
      <ReactQuery />
    </QueryClientProvider>
    <CounterContextProvider>
      <UseReducer />
    </CounterContextProvider>
  </Provider>
)
