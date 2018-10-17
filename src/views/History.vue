<template>
  <div class="history padding_4">
    <h1>Search History</h1>
      <div v-if="searchHistoryCount == 0" class="margin-top_4 padding_4 texture_light back_info-2 shadow_n3 border-radius_radius">
        You Currently have No Search History.  
      </div>
      <transition-group 
        appear
        name="fade"
        class="no-bullet"
        appear-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft"
        tag="ul" :duration="1000">
        <li class="border-bottom-width_1 border_solid border_secondary-4 font_1 padding-top_3 padding-bottom_2 hover_secondary-4 hover-text_acc color_secondary" v-for="(result, index) in searchHistory" :key="index" @click="searchFromHistory(result)" >
          <strong class="margin-left_3">{{result.searchTerm}}</strong>
          <small class="color_primary font_n2 margin-left_4 clearboth 
        ">Results: {{result.resultCount}}</small> <i class="fal fa-search float-right margin-top_3 margin-right_3"></i></li>
      </transition-group>
  </div>
  </template>

<script>
import {mapState, mapGetters} from "vuex";
import router from "@/router";
  export default {
    name:"History",
    computed:{
      ...mapState(['searchHistory']),
      ...mapGetters(['searchHistoryCount']),
    },
    methods:{
      searchFromHistory: function(result){
        router.push({ path: 'search', query: { q: result.searchTerm }})

      }
    }
  }
</script>

<style scoped>

</style>
