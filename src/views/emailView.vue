<template>
    <section>
      {{ filtrarEmails }}
    </section>
  </template>
  
  <script>
  import { mapGetters } from 'vuex'
  export default {
      name:'emailView',
      computed:{
          ...mapGetters(['filtrarEmails'])
      }
  }
  </script>