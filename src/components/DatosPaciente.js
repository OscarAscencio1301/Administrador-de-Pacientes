import React from 'react'
import { Footer } from './Footer'
import { FormularioPaciente } from './FormularioPaciente'
import { Pacientes } from './Pacientes'

export const DatosPaciente = () => {
    return (
        <div>
            <h1 className="titulo">Administrador de Pacientes</h1>
            <div className="container">
                <FormularioPaciente />
                <Pacientes />
            </div>
            <Footer />
        </div>
    )
}
