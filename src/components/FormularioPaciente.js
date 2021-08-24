import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { agregarPaciente, editarPaciente, limpiarPaciente } from '../actions/pacientes'
import { useForm } from '../hooks/useForm'

export const FormularioPaciente = () => {
    const dispatch = useDispatch()
    const { pacienteActivo } = useSelector(state => state.paciente)
    console.log(pacienteActivo)
    const [valores, setvalores, cambioInput, reset] = useForm({
        dueño: '',
        mascota: '',
        fecha: '2021-08-12',
        hora: '02:28',
        sintomas: ''
    })
    useEffect(()=> {
        if(pacienteActivo){
            setvalores(pacienteActivo)
        }else{
            setvalores({
                dueño: '',
                mascota: '',
                fecha: '',
                hora: '',
                sintomas: ''
            })
        }

    }, [pacienteActivo, setvalores])
    const enviarFormulario = (e) => {
        e.preventDefault();
        if (validar()) {
            if (pacienteActivo) {
                Swal.fire({
                    title: 'Paciente Editado',
                    icon: 'success'
                })
                dispatch(editarPaciente(valores))
            } else {
                Swal.fire({
                    title: 'Paciente Creado',
                    icon: 'success'
                })
                valores.id = Date.now()
                dispatch(agregarPaciente(valores))
            }
            reset();
            dispatch(limpiarPaciente());

        }
    }
    const validar = () => {
        if (dueño.trim().length < 5) {
            Swal.fire({
                title: 'Colocar el nombre del dueño',
                icon: 'error'
            })
            return false;
        }
        if (mascota.trim().length < 2) {
            Swal.fire({
                title: 'Colocar el nombre de la mascota',
                icon: 'error'
            })
            return false;
        }
        return true
    }

    const { dueño, mascota, fecha, hora, sintomas } = valores
    return (
        <div className="formulario">
            <h1 className="titulo">Crear Cita</h1>
            <form className="formulario__container" onSubmit={enviarFormulario}>
                <input
                    type="text"
                    placeholder="Nombre del Dueño"
                    name="dueño"
                    className="formulario__input"
                    value={dueño}
                    onChange={cambioInput}
                />
                <input
                    type="text"
                    placeholder="Nombre de la Mascota"
                    name="mascota"
                    className="formulario__input"
                    value={mascota}
                    onChange={cambioInput}
                />
                <input
                    type="date"
                    name="fecha"
                    className="formulario__input"
                    value={fecha}
                    onChange={cambioInput}
                />
                <input
                    type="time"
                    name="hora"
                    className="formulario__input"
                    value={hora}
                    onChange={cambioInput}
                />
                <input
                    type="text"
                    placeholder="Sintomas"
                    name="sintomas"
                    className="formulario__input"
                    value={sintomas}
                    onChange={cambioInput}
                />
                <button className="boton_enviar" type="submit">{pacienteActivo ? 'Guardar Cambios' : 'Agregar Cita'}</button>
            </form>
        </div>
    )
}
