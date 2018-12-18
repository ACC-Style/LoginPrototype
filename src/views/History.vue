<template>
  <div class="history p_4">
    <h1>Search History</h1>
      <div v-if="searchHistoryCount == 0" class="m-t_4 p_4 texture_light bg_info-2 shadow_n3  br_radius">
        You Currently have No Search History.  
      </div>
      <transition-group 
        appear
        name="fade"
        class="no-bullet"
        appear-active-class="animated fadeInr" leave-active-class="animated fadeOutl"
        tag="ul" :duration="1000">
        <li class="br-b-width_1  br_solid  br_secondary-4 font_1 padding-t_3 padding-b_2 hover_secondary-4 hover:c_acc color_secondary" v-for="(result, index) in searchHistory" :key="index" @click="searchFromHistory(result)" >
          <strong class="m-l_3">{{result.searchTerm}}</strong>
          <small class="color_primary font_n2 m-l_4 clearboth 
        ">Results: {{result.resultCount}}</small> <i class="fal fa-search float-r m-t_3 m-r_3"></i></li>
      </transition-group>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import router from "@/router";
export default {
  name: "History",
  computed: {
    ...mapState(["searchHistory"]),
    ...mapGetters(["searchHistoryCount"])
  },
  methods: {
    ...mapMutations(["HISTORY_NEW_OFF"]),
    searchFromHistory: function(result) {
      router.push({ path: "search/", query: { q: result.searchTerm } });
    }
  },
  mounted() {
    this.$emit("history-new-off");
  }
};
</script>

<style scoped>
</style>
