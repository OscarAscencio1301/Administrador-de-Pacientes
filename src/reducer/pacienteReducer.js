import { types } from "../types/types"

const init = ()  => {
    return {
        pacientes: JSON.parse(localStorage.getItem('citas')) || [],
        pacienteActivo: null
    }
}

export const pacienteReducer = (state = init(), action) => {
    switch (action.type) {
        case types.agregarPaciente:
            return {
                ...state,
                pacientes: [...state.pacientes, action.payload]
            }
        case types.borrarPaciente:
            return {
                ...state,
                pacientes: state.pacientes.filter(paciente => paciente.id !== action.payload)
            }

        case types.editarPaciente:
            return {
                ...state,
                pacientes: state.pacientes.map(paciente => paciente.id === action.payload.id ? action.payload : paciente)
            }
        case types.activarPaciente:
            return {
                ...state,
                pacienteActivo: action.payload
            }
        case types.limpiarPaciente:
            return {
                ...state,
                pacienteActivo: null
            }

        default:
            return state;
    }

}