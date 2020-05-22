<template>
  <div>
    <b-container fluid="true" class="mt-5">
        <b-row class="justify-content-md-center">
          <b-col cols="6">
            <b-jumbotron>
              <u><h4 class="text-center">Register</h4></u>
              <b-form @submit="onSubmit" @reset="onReset">
                  <b-form-group
                      id="input-group-1"
                      label-for="input-1"
                      required
                  >
                      <b-form-input
                      id="input-1"
                      v-model="form.firstName"
                      type="text"
                      required
                      placeholder="Enter first name"
                      ></b-form-input>
                  </b-form-group>

                  <b-form-group id="input-group-2" label-for="input-2">
                      <b-form-input
                      id="input-2"
                      v-model="form.LastName"
                      type="text"
                      required
                      placeholder="Enter last name"
                      ></b-form-input>
                  </b-form-group>
                  <b-form-group id="input-group-2" label-for="input-2">
                      <b-form-input
                      id="input-2"
                      v-model="form.company"
                      type="text"
                      required
                      placeholder="Enter company"
                      ></b-form-input>
                  </b-form-group>

                  <b-form-group id="input-group-2" label-for="input-2">
                      <b-form-input
                      id="input-2"
                      v-model="form.email"
                      type="email"
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
                      placeholder="Enter passsword"
                      ></b-form-input>
                  </b-form-group>
                  <b-form-group id="input-group-2" label-for="input-2" description="For this demo keep url like http://localhost:8000/registration-verification">
                      <b-form-input
                      id="input-2"
                      v-model="form.returnUrl"
                      type="text"
                      required
                      placeholder="Enter return url e.g http://your domain/registration-verification?t=token"
                      ></b-form-input>
                  </b-form-group>

                  <b-form-group>
                    <b-button @click="this.onReset">Reset</b-button>&nbsp;
                      <b-button type="submit" variant="primary">Register</b-button>
                  </b-form-group>
                  <b-form-group>
                    <router-link to="/">Already have an account</router-link>
                  </b-form-group>
              </b-form>
            </b-jumbotron>
          </b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
  import * as rules from 'vee-validate/dist/rules';
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        form: {
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          password: '',
          returnUrl: ''
        },
      }
    },
    methods: {
      ...mapActions(['register', 'setOverlay']),
      onSubmit(evt) {
        evt.preventDefault()
        this.register(this.form)
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.firstName = ''
        this.form.lastName = ''
        this.form.company = ''
        this.form.email = ''
        this.form.password = ''
        this.form.returnUrl = ''
      }
    }
  }
</script>
