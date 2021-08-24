import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { PacienteInd } from './PacienteInd'

export const Pacientes = () => {
    const {pacientes} = useSelector(state => state.paciente)
        // LocalStorage
        useEffect(() => {
            localStorage.setItem('citas', JSON.stringify(pacientes))
        }, [pacientes])

  

        
    return (
        <div className="listado">
            <h1 className="titulo">{pacientes.length > 0 ? 'Citas' : 'No hay Citas'}</h1>
            {
                pacientes.map(paciente => <PacienteInd paciente={paciente} key={paciente.id}/>)
            }
        </div>
    )
}
