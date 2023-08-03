<template>
    <div class="contenedor">
        <div class="formulario">
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

            <button @click="insertarDatos">Guardar</button>
        </div>

    </div>
   
</template>
 
<script>

import { insertarEstudianteFachada } from '../helpers/EstudianteCliente';
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

        async insertarDatos() {
            const data = {
                cedula: this.cedula,
                nombre: this.nombre,
                apellido: this.apellido,
                fechaNacimiento: this.fechaNacimiento,
                provincia: this.provincia
            }
            await insertarEstudianteFachada(data)

        }

    }
}

</script>
  
<style>
div {
    display: block;
}
</style>
