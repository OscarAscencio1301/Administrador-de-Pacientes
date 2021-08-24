import { types } from "../types/types";

export const agregarPaciente = (paciente) => ({
    type: types.agregarPaciente,
    payload: paciente
})


export const borrarPaciente = (id) => ({
    type: types.borrarPaciente,
    payload: id
})


export const editarPaciente = (paciente) => ({
    type: types.editarPaciente,
    payload: paciente
})

export const activarPaciente = (paciente) => ({
    type: types.activarPaciente,
    payload: paciente
})

export const limpiarPaciente = () => ({
    type: types.limpiarPaciente,

})