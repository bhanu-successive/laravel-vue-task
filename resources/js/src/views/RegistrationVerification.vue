<template>
  <b-container fluid="true" class="mt-5">
        <b-row class="justify-content-md-center" align-v="center">
        <b-col cols="6">
            <b-jumbotron>
                <p v-if="status.toUpperCase() === 'SUCCESS'">Email verified successfully!!</p>
                <p v-if="status.toUpperCase() === 'ERROR'">We encountered some error while processing your request.</p>
                <router-link to="/">Back to home</router-link>
            </b-jumbotron>
        </b-col>
    </b-row>
    </b-container>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    data() {
      return {
        status: ''
      }
    },
    mounted: function() {
      this.$nextTick(()=>{
        this.status = this.$route.query.status
      })
    },
  }
</script>