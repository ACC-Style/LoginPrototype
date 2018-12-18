<template>
    <nav aria-label="Pagination" class=" br_solid  br_primary br-t_3 br_0">
        <ul class="pagination font_display font_bold float-r">
            <li class="pagination-previous disabled"><i class="fas fa-chevron-l"></i> <span class="show-for-sr">page</span></li>
            <li><a class="current" @click="$emit('gotage', page)"><span class="show-for-sr">You're on page</span> 1</a></li>
            <li v-for="(page, index) in pageRange" v-bind:key="index"><a @click="$emit('gotage', page)" aria-label="Page">{{page}}</a></li>
            <li class="fal fa-ellipsis-h" aria-hidden="true"></li>
            <li class="pagination-next"><a href="#" aria-label="Next page"><i class="fas fa-chevron-r"></i><span class="show-for-sr">page</span></a></li>
        </ul>
    </nav>
</template>
<script>
export default {
  name: "pagination",
  props: {
    paginator: Object,
    currentPage: Number,
    maxPages: Number,
    listSize: Number
  },
  computed: {
    pageRange: function() {
      let range = [1, 2, 3, 4, 5];
      return range;
    }
  },
  data() {
    return {};
  },
  methods: {
    shiftUpPages: function() {},
    shiftDownPages: function() {}
  }
};
</script>
<style lang="css">
</style>
