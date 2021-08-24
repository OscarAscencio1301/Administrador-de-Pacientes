import React from 'react'
import { Provider } from 'react-redux'
import { DatosPaciente } from './components/DatosPaciente'
import { store } from './store/sotre'

export const App = () => {

    
   



    return (
        <Provider store={store}>
            <DatosPaciente />
        </Provider>
    )
}
