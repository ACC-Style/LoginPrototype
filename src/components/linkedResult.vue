<template>
    <div class="linkedResult padding-left_3 margin-top_n3 margin_3 padding-right_3 border-bottom-width_2">
        <div class="card result childs shadow_2 texture_medium border_secondary-3 margin-bottom_0 ">
            <div class="detail-container color_white">
                <div class="grid-x">
                    <div class="cell auto ">
                        <div class="member-name font_0 font_slab line-height_2 member-name padding_3 padding-left_4 padding-right_3">{{fullName}}</div>
                        <div class="">
                            <ul class="details font_n1 no-bullet padding-left_3 padding-right_3 margin-bottom_0 grid-x grid-margin-x">
                                <li class="border-bottom-width_1 border_secondary-5 border_solid padding_2 cell small-12 large-6">
                                    <div v-if="hasMembership"><i class="margin-left_3 margin-right_3 fal fa-user-md"></i> {{memberType}}</div>
                                    <div v-if="!hasMembership"><i class="fal fa-user-slash"></i> NPI</div>
                                </li>
                                <li class="border-bottom-width_1 border_secondary-5 border_solid padding_2 cell small-12 large-6">
                                    <i class="margin-left_3 margin-right_3 fal fa-hashtag"></i>
                                    {{personifyNumber}}
                                </li>
                                <li class="border-bottom-width_1 border_secondary-5 border_solid padding_2 cell small-12 large-6">
                                    <i class="margin-left_3 margin-right_3 fal fa-at"></i>
                                    {{email}}
                                     <span class="color_alert" v-if="email == ''"> <i class="fas fa-exclamation-square"></i> account must have an email</span>
                                    
                                    <a href="#" class="link color_primary-4 float-right padding-left_2 padding-right_2"><i class="fal fa-pencil"></i></a>
                                </li>
                                <li class="border-bottom-width_1 border_secondary-5 border_solid padding_2 cell small-12 large-6">
                                    <i class="margin-left_3 margin-right_3 fal fa-map-pin"></i>
                                   {{location}}
                                </li>
                                <li v-if="hasBadge" class="border-bottom-width_1 border_secondary-5 border_solid padding_2 cell small-12 large-6">
                                    <i class="margin-left_3 margin-right_3 fal fa-badge-check"></i>
                                    {{badgeNumber}}
                                    <a href="" class="link color_primary-4 float-right padding-left_2 padding-right_2"><i class="fal fa-exchange-alt"></i></a>
                                </li>
                                <li class="border-bottom-width_1 border_secondary-5 border_solid padding_2 cell small-12 large-6">
                                    <i class="margin-left_3 margin-right_3 fal fa-user-circle"></i>
                                   {{userName}}
                                    <a href="#" class="link color_primary-4 float-right padding-left_2 padding-right_2"><i class="fal fa-pencil"></i></a>
                                </li>
                                <li class="border-bottom-width_1 border_secondary-5 border_solid padding_2 cell small-12 large-6">
                                    <i class="margin-left_3 margin-right_3 fal fa-key"></i>
                                    {{password}}
                                    <a href="#" class="link color_primary-4 float-right padding-left_2 padding-right_2"></a>
                                </li>
                                <li class="cell small-12 large-6 padding_2"><a v-on:click="make_primary" class="link color_primary-4 padding_2"><i class="margin-left_3 margin-right_3  fas fa-crown"></i> make primary</a><a  v-on:click="remove_item" class="link color_primary-4 float-right">remove item<i class="margin-left_3 margin-right_3 fas fa-times"></i></a></li>
                            </ul>
                        </div>
                        
                    </div>
                    <div class="cell shrink texture_medium back_secondary-n3 margin-right_3 color_secondary">
                        <ul class="flag no-bullet font_n1">
                            <li class="padding_3 center member" v-bind:class="{ active: hasMembership }"><i class="fal fa-user-md"></i></li>
                            <li class="padding_3 center accbadge" v-bind:class="{ active: hasBadge }"><i class="fal fa-badge-check"></i></li>
                            <li class="padding_3 center iscience" v-bind:class="{ active: hasIScience }"><i class="fal fa-flask"></i></li>
                            <li class="padding_3 center bruteforce" v-bind:class="{ active: hasBruteForceLock }"><i class="fal fa-lock-alt"></i></li>
                            <li class="padding_3 center expobadge" v-bind:class="{ active: hasExpoBadge }"><i class="fal fa-exclamation-circle"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "linkedResult",
  props: {
    fullName: String,
    personifyNumber: String,
    badgeNumber: { type: Number, default: -1 },
    email: String,
    location: String,
    userName: String,
    password: String,
    memberType: { type: String, default: "NPI" },
    iscienceBadge: { type: Number, default: -1 },
    bruteForceLock: { type: Boolean, default: false },
    expoBadge: { type: Boolean, default: false }
  },
  computed: {
    hasMembership: function() {
      if (this.memberType != "" && this.memberType != "NPI") {
        return true;
      }
      return false;
    },
    hasBadge: function() {
      return this.badgeNumber == -1 ? false : true;
    },
    hasIScience: function() {
      return this.iscienceBadge == -1 ? false : true;
    },
    hasBruteForceLock: function() {
      return this.bruteForceLock;
    },
    hasExpoBadge: function() {
      return this.expoBadge;
    }
  },
  data() {
    return {};
  },
  methods: {
    remove_item: function() {
      
    },
    make_primary: function() {
     
    }
  }
};
</script>
<style lang="css">
</style>
