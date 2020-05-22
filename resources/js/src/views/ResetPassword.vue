<template>
  <b-container fluid="true" class="mt-5">
        <b-row class="justify-content-md-center" align-v="center">
        <b-col cols="6">
            <b-jumbotron>
              <u><h4 class="text-center">Reset Password</h4></u>
              <b-form @submit="onSubmit">

                <b-form-group id="input-group-2" label-for="input-2">
                    <b-form-input
                    id="input-2"
                    v-model="form.password"
                    type="password"
                    required
                    placeholder="Enter password"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label-for="input-2">
                    <b-form-input
                    id="input-2"
                    v-model="form.confirmPassword"
                    type="password"
                    required
                    placeholder="Confirm password"
                    ></b-form-input>
                </b-form-group>

                <b-form-group>
                  <b-button type="submit" variant="primary">Submit</b-button>
                </b-form-group>

                <b-form-group>
                  <router-link to="/">Back to login</router-link>
                </b-form-group>
            </b-form>
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
        form: {
          password: '',
          confirmPassword: '',
          verify_code: '',
        },
      }
    },
    mounted: function() {
      this.$nextTick(()=>{
        this.form.verify_code = this.$route.query.verify_code
      })
    },
    methods: {
      ...mapActions(['resetPassword']),
      onSubmit(evt) {
        evt.preventDefault()
        this.resetPassword(this.form)
      }
    }
  }
</script>
