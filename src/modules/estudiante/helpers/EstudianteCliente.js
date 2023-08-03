import axios from "axios";

export const insertarEstudianteFachada = (bodyEstudiante) => {
    insertarEstudiante(bodyEstudiante)
}

export const actualizarEstudianteFachada = (bodyEstudiante, id) => {
    actualizarEstudiante(bodyEstudiante, id)
}

export const borrarEstudianteFachada = (id) => {
    eliminarEstudiante(id)
}

export const buscarEstudianteFachada =async (cedula) => {
   return await buscarEstudiante(cedula)
}


const insertarEstudiante = (bodyEstudiante) => {
    axios.post(`http://localhost:8080/API/1.0/Matricula/estudiantes`, bodyEstudiante).then(r => r.data)
}

const actualizarEstudiante = (bodyEstudiante, id) => {
    axios.put(`http://localhost:8080/API/1.0/Matricula/estudiantes/${id}`, bodyEstudiante).then(r => r.data)
}

const eliminarEstudiante = (id) => {
    axios.delete(`http://localhost:8080/API/1.0/Matricula/estudiantes/${id}`).then(r => r.data)
}

const buscarEstudiante = async (cedula) => {
    const data = axios.get(`http://localhost:8080/API/1.0/Matricula/estudiantes/${cedula}`).then(r => r.data)
    return data
}

