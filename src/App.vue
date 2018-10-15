<template>
  <div id="app"> 
    <div class="viewport">
      <router-view/>
    </div>
    
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/search">Search</router-link>
      <router-link to="/about">About</router-link>
    </div>

  </div>
</template>

<style>
.viewport {
  min-height: 100vh;
}
</style>
