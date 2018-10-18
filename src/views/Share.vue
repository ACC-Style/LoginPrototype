<template>

<div class="Shared padding_4">
  <h1>Shared Results</h1>
      <div v-if="shares.length == 0" class="margin-top_4 padding_4 texture_light back_info-2 shadow_n3 border-radius_radius">
        You Currently have no shared member accounts.  
      </div>

    <div v-for="(share , index) in shares" :key="index" class="card shadow_2 margin-bottom_3">
        <div class="card-body">
          <div class="detail-container color_black">
                <div class="grid-x">
                    <div class="cell auto ">
                        <div class="member-name font_1 font_slab line-height_2 member-name padding_3 padding-left_4 padding-right_3 color_ACC">{{share.memberName}}</div>
                        
                        
                        <div class="">
                            <ul class="details font_n1 no-bullet padding-left_3 padding-right_3 margin-bottom_0 grid-x grid-margin-x">
   
                                <li class="border-bottom-width_1 border_secondary-5 border_solid padding_2 cell small-12 large-6">
                                    <i class="margin-left_3 margin-right_3 fal fa-hashtag"></i>
                                    {{share.personifyNumber}}
                                </li>
                                <li class="border-bottom-width_1 border_secondary-5 border_solid padding_2 cell small-12 large-6">
                                    <i class="margin-left_3 margin-right_3 fal fa-at"></i>
                                    {{share.emailAddress}}
                                     <span class="color_alert" v-if="share.emailAddress == '' || share.emailAddress == undefined"> <i class="fas fa-exclamation-square"></i> Account must have an email</span>
                                </li>
                                <li class="border-bottom-width_1 border_secondary-5 border_solid padding_2 cell small-12 large-6">
                                    <i class="margin-left_3 margin-right_3 fal fa-badge-check"></i>
                                    {{share.badgeNumber}}
                                    <span class="color_alert" v-if="share.badgeNumber == '' || share.badgeNumber == undefined"> <i class="fas fa-exclamation-square"></i> No badge on account</span>
                                    
                                </li>
                                <li class="cell small-12 large-6 padding_2"><a class="link color_primary float-right" @click="openMemberRecord(share.personifyNumber)">open member record<i class="margin-left_3 margin-right_3 fas fa-arrow-square-right"></i></a></li>
                            </ul>
                        </div>                        
                            <div style="display:block" class="card-divider text-center font_light font_n1 line-height_1 member-name padding-left_4 padding-right_4 padding_2">Shared By: <span class="color_info font_bold">{{share.sharedBy}}</span> @ {{share.timestamp}}
                            </div>
                    </div>
                </div>
            </div>
        </div>
	</div>
</div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import router from "@/router";

export default {
  name: "Shared",
  computed: {
    ...mapState(["shares", "sharesNew"])
  },
  methods: {
    ...mapMutations(["SHARE_NEW_OFF"]),
    openMemberRecord: function(val) {
      router.push({ path: "search/", query: { q: val } });
    }
  },
  mounted() {
    this.$emit("share-new-off");
  }
};
</script>

<style scoped>
</style>
