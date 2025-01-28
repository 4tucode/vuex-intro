<template>
  <nav>
    <router-link to="/">Todos los usuarios</router-link> |
    <router-link to="/sorted">usuarios ordenados</router-link> |
    <router-link to="/email">correos .net</router-link>
  </nav>
  <router-view/>
</template>
<script>
  import { mapActions } from 'vuex'
  export default{
    methods:{
        ...mapActions(['obtener_usuarios'])
    },
    mounted(){
      this.obtener_usuarios(); // Cada vez que se monta el componente, se ejecuta la acción para obtener los usuarios
    }
  }
</script>