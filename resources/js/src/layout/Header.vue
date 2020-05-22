<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">ACL Mobiles</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav v-if="isAuthenticated()">
    
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>Hi there</em>
          </template>
          <b-dropdown-item href="#" @click="logout">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
   
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    
    export default {
        name: "Header",
        methods: {
          ...mapGetters({isAuthenticated: 'isAuthenticated'}),
          ...mapActions(['logout'])
        }
    };
</script>