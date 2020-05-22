<template>
  <b-container fluid="true" class="mt-5">
        <b-row class="justify-content-md-center" align-v="center">
        <b-col cols="6">
            <b-jumbotron>
              <u><h4 class="text-center">Forgot Password</h4></u>
              <b-form @submit="onSubmit">
                <b-form-group
                    id="input-group-1"
                    label-for="input-1"
                    required
                >
                    <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="Enter your registered email"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="input-group-1"
                    label-for="input-1"
                    required
                >
                    <b-form-input
                    id="input-1"
                    v-model="form.returnUrl"
                    type="text"
                    required
                    placeholder="Enter return url"
                    ></b-form-input>
                </b-form-group>


                <b-form-group>
                  <b-button type="submit" variant="primary">Sumit</b-button>
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
          email: '',
          returnUrl: '',
        },
      }
    },
    methods: {
      ...mapActions(['forgotPassword']),
      onSubmit(evt) {
        evt.preventDefault()
        this.forgotPassword(this.form)
      }
    }
  }
</script>
