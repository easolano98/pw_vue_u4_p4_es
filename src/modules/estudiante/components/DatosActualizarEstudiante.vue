<template>
    <div class="contenedor">
        <div class="formulario">
            <label for="">Id</label>
            <input v-model="id" type="text" />
            <label for="">Cedula</label>
            <input v-model="cedula" type="text" />
            <label for="">Nombre</label>
            <input v-model="nombre" type="text" />
            <label for="">Apellido</label>
            <input v-model="apellido" type="text" />
            <label for="">Fecha de nacimiento</label>
            <input v-model="fechaNacimiento" type="datetime-local" />
            <label for="">Provincia</label>
            <input v-model="provincia" type="text" />
            <button @click="actualizarDatos">Actualizar</button>
        </div>
       
    </div>
</template>

<script>

import { actualizarEstudianteFachada } from '../helpers/EstudianteCliente';

export default {

    data() {
        return {
            id: null,
            cedula: null,
            nombre: null,
            apellido: null,
            fechaNacimiento: null,
            provincia: null
        }
    },
    methods: {

        async actualizarDatos() {
            const data = {
                cedula: this.cedula,
                nombre: this.nombre,
                apellido: this.apellido,
                fechaNacimiento: this.fechaNacimiento,
                provincia: this.provincia
            }
            await actualizarEstudianteFachada(data, this.id)

        }

    }


}
</script>

<style>

</style>