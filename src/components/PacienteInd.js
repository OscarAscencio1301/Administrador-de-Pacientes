import React from 'react'
import { useDispatch } from 'react-redux'
import { activarPaciente, borrarPaciente } from '../actions/pacientes'

export const PacienteInd = ({paciente}) => {
    const dispatch = useDispatch()
    const {id, dueño,mascota,fecha,hora,sintomas} = paciente

    const borrarPacienteBTN = () => {
        dispatch(borrarPaciente(id))
    }

    const editarPacienteBTN = () => {
        dispatch(activarPaciente(paciente))
    }
    return (
        <div className="paciente__contenedor">
            <h2>{mascota}</h2>
            <h3>{dueño}</h3>
            <p>{fecha}</p>
            <p>{hora}</p>
            <p>{sintomas}</p>
            <button className="paciente__borrar" onClick={borrarPacienteBTN}>Borrar</button>
            <button className="paciente__editar" onClick={editarPacienteBTN}>Editar</button>
        </div>
    )
}
