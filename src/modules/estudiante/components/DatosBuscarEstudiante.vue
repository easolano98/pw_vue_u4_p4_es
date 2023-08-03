<template>
    <div class="contenedor">
        <div class="formulario">
            <label for="">Cedula</label>
            <input v-model="cedula" type="text">
            <label for="">Nombre</label>
            <input v-model="nombre" type="text" disabled>
            <label for="">Apellido</label>
            <input v-model="apellido" type="text" disabled>
            <label for="">Fecha de Nacimiento</label>
            <input v-model="fechaNacimiento" type="datetime-local" disabled>
            <label for="">Provincia</label>
            <input v-model="provincia" type="text" disabled>
            <button @click="consultarDato">Consultar</button>

        </div>

    </div>
</template>

<script>
import { buscarEstudianteFachada } from '../helpers/EstudianteCliente';
export default {
    data() {
        return {
            cedula: null,
            nombre: null,
            apellido: null,
            fechaNacimiento: null,
            provincia: null
        }
    },
    methods: {
        async consultarDato() {
            const data = await buscarEstudianteFachada(this.cedula)
            this.cedula = data.cedula,
                this.nombre = data.nombre,
                this.apellido = data.apellido,
                this.fechaNacimiento = data.fechaNacimiento,
                this.provincia = data.provincia
        }
    }
}
</script>

<style>

</style>