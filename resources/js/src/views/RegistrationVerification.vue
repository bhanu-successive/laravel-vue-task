<template>
  <b-container fluid="true" class="mt-5">
        <b-row class="justify-content-md-center" align-v="center">
        <b-col cols="6">
            <b-jumbotron>
                <p>Verifying. Please wait....!!</p>
            </b-jumbotron>
        </b-col>
    </b-row>
    </b-container>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    mounted: function() {
      this.$nextTick(()=>{
        this.registrationVerification(this.$route.query.t)
      })
    },
    methods: {
      ...mapActions(['registrationVerification']),
    }
  }
</script>