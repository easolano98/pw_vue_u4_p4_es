<template>
    <div>
      <router-link to="/">Bienvenido</router-link>|
      <router-link to="/insertar">Insertar Estudiante</router-link>|
      <router-link to="/actualizar">Actualizar Estudiante</router-link>
      <router-link to="/buscar">Buscar Estudiante</router-link>|
      <router-link to="/eliminar">Eliminar Estudiante</router-link>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped >
  div{
        
      background-color: #769FB6;
      font-size: 25px;
      width: 1200px;
      margin-left: 190px;
      margin-right: 350px;
      margin-bottom: 25px;
  }
  
  a{  
      color: white;
      text-decoration: none;
      padding-right: 15px;
      padding-left: 15px;
      margin-left: 0;
      
  }
  
  a:visited{
      color: white;
  }
  
  a:hover{
      background-color: #188FA7;
      color: white;
  }
  </style>