<template>
  <section>
    {{ ordenarUsuarios }}
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name:'sortedView',
    computed:{
        ...mapGetters(['ordenarUsuarios'])
    }
}
</script>