import {createRouter, createWebHashHistory} from "vue-router"

const routes=[{path:"/", component: ()=> import('../pages/BienvenidoPage.vue')},
{path:"/insertar", component: ()=> import('../pages/InsertarEstudiante.vue')},
{path:"/actualizar", component: ()=> import('../pages/ActualizarEstudiante.vue')},
{path:"/buscar", component: ()=> import('../pages/BuscarEstudiante.vue')},
{path:"/eliminar", component: ()=> import('../pages/EliminarEstudiante.vue')}];

const router= createRouter({
    history: createWebHashHistory(),
    routes
});

export default router
    