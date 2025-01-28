<template>
  <section>
    {{ allUsers }}
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'allUsersView',
    computed: {
       ...mapGetters(['allUsers'])
    }
}
</script>