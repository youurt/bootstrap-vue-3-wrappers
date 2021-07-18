<template>
  <b-navbar class="m-2" toggleable type="dark" variant="dark">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        type dark | variant dark
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <b-navbar class="m-2" toggleable type="info" variant="danger">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse2"></b-navbar-toggle>
    <b-collapse id="nav-collapse2" is-nav>
      <b-navbar-nav>
        test
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <b-navbar class="m-2" toggleable type="info" variant="success" fixed="bottom">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse3"></b-navbar-toggle>
    <b-collapse id="nav-collapse3" is-nav>
      <b-navbar-nav>
        fixed bottom
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <b-navbar class="m-2" toggleable type="info" variant="success" sticky>
    <b-navbar-brand href="#">NavBar</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse4"></b-navbar-toggle>
    <b-collapse id="nav-collapse4" is-nav>
      <b-navbar-nav>
        sticky top
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BNavbar from '@/components/BNavbar/BNavbar.vue'
import BNavbarBrand from '@/components/BNavbarBrand/BNavbarBrand.vue'
import BNavbarNav from '@/components/BNavbarNav/BNavbarNav.vue'
import BNavbarToggle from '@/components/BNavbarToggle/BNavbarToggle.vue'
import BCollapse from '@/components/BCollapse/BCollapse.vue'

export default defineComponent({
  name: 'Navbar',
  components: {
    BNavbar,
    BNavbarBrand,
    BNavbarNav,
    BNavbarToggle,
    BCollapse
  }
  // setup() {

  // },
})
</script>
