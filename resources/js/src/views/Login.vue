<template>
  <b-container fluid="true" class="mt-5">
        <b-row class="justify-content-md-center">
        <b-col cols="6">
            <b-jumbotron>
              <u><h4 class="text-center">Login</h4></u>
              <b-form @submit="onSubmit" @reset="onReset">
                <b-form-group
                    id="input-group-1"
                    label-for="input-1"
                    required
                >
                    <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="text"
                    required
                    placeholder="Enter email"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label-for="input-2">
                    <b-form-input
                    id="input-2"
                    v-model="form.password"
                    type="password"
                    required
                    placeholder="Enter password"
                    ></b-form-input>
                </b-form-group>

                <b-form-group>
                  <b-button type="submit" variant="primary">Log In</b-button>
                </b-form-group>
                <b-form-group>
                  <router-link to="/register">Don't have account? sign up</router-link>
                </b-form-group>
                <b-form-group>
                  <router-link to="/forgot-password">Forgot password</router-link>
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
          email: '',
          password: '',
          checked: []
        },
      }
    },
    methods: {
      ...mapActions(['login']),
      onSubmit(evt) {
        evt.preventDefault()
        this.login(this.form)
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.password = ''
        this.form.checked = []
      }
    }
  }
</script>
