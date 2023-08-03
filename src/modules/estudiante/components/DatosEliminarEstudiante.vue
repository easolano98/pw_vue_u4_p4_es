<template>
    <div class="contenedor">
        <div class="formulario">
            <label for="">Identificador</label>
            <input v-model="id" type="text" />
            <button @click="eliminarDatos">Eliminar</button>
        </div>
    </div>


   
</template>
 
<script>

import { borrarEstudianteFachada } from '../helpers/EstudianteCliente';
export default {

    data() {
        return {
            id: null,
        }
    },
    methods: {

        async eliminarDatos() {
            const id = this.id
            await borrarEstudianteFachada(id)
        }

    }
} 
</script>
  
<style>
div {
    display: block;
}
</style>
