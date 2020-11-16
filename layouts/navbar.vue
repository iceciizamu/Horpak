<template>
    <!-- Sidebar -->
    <div class="wrapper"><h2>Ice</h2>
    <b-button v-b-toggle.sidebar-no-header variant="primary" class="sidebar">
      <b-icon icon="hdd-stack-fill"></b-icon> Menu
    </b-button>
    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
      <template #default="{ hide }">
        <div class="p-3">
          <h4 id="sidebar-no-header-title">Custom header sidebar</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item active @click="hide">Active</b-nav-item>
              <b-nav-item href="/user" @click="hide">Link</b-nav-item>
              <b-nav-item href="#link-2" @click="hide">Another Link</b-nav-item>
            </b-nav>
          </nav>
          <b-button variant="primary" block @click="hide">Close Sidebar</b-button>
        </div>
      </template>
      
    </b-sidebar>
    <Nuxt/>
  </div>
  
</template>
<script>
import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
export default {
  
}
</script>


<style >


.sidebar {
  
   
    position: fixed;
    top: 0;
    left: 0;
    height: 5vh;
    z-index: 555;
    background: hsl(203, 100%, 83%);
    color: #fff;
    transition: all 0.3s;
}
</style>