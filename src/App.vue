<template>
  <div id="app"> 
    <div class="viewport texture_light">
      <router-view />
    </div>
    
    <div id="nav" class="back_acc grid-x color_white shadow_5">
      <router-link class="auto button cell center clear color_secondary-5 color_white hover-text_primary-4 margin-bottom_0" to="/"><i class="fas fa-sign-out-alt"></i></router-link>
      <router-link class="auto button cell center clear color_secondary-5 color_white hover-text_primary-4 margin-bottom_0" to="/search"><i class="fas fa-search"></i></router-link>
      <router-link class="auto button cell center clear color_secondary-5 color_white hover-text_primary-4 margin-bottom_0" to="/shared"> <i class="fas fa-comments"></i></router-link>
      <router-link class="auto button cell center clear color_secondary-5 color_white hover-text_primary-4 margin-bottom_0" to="/history"> <i class="fas fa-history"></i></router-link>
      <router-link class="auto button cell center clear color_secondary-5 color_white hover-text_primary-4 margin-bottom_0" to="/about"><i class="fas fa-info-square"></i></router-link>
     
    </div>

  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss">
.viewport {
  min-height: 100vh;
  overflow-x:hidden;
}
#nav {
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}
</style>
