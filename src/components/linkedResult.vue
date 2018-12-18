<template>
    <div class="linkedResult p-l_3 m-t_n3 m_3 p-r_3 br-b-width_2">
        <div class="card result childs shadow_2 texture_medium  br_secondary-3 m-b_0 ">
            <div class="detail-container c_white">
                <div class="grid-x">
                    <div class="cell auto ">
                        <div class="member-name font_0 font_slab line-height_2 member-name p_3 p-l_4 p-r_3">{{fullName}}</div>
                        <div class="">
                            <ul class="details font_n1 no-bullet p-l_3 p-r_3 m-b_0 grid-x grid-margin-x">
                                <li class="br-b_1 br_0  br_secondary-5  br_solid p_2 cell small-12 large-6">
                                    <div v-if="hasMembership"><i class="m-l_3 m-r_3 fal fa-user-md"></i> {{memberType}}</div>
                                    <div v-if="!hasMembership"><i class="fal fa-user-slash"></i> NPI</div>
                                </li>
                                <li class="br-b_1 br_0  br_secondary-5  br_solid p_2 cell small-12 large-6">
                                    <i class="m-l_3 m-r_3 fal fa-hashtag"></i>
                                    {{personifyNumber}}
                                </li>
                                <li class="br-b_1 br_0  br_secondary-5  br_solid p_2 cell small-12 large-6">
                                    <i class="m-l_3 m-r_3 fal fa-at"></i>
                                    {{email}}
                                     <span class="c_alert" v-if="email == ''"> <i class="fas fa-exclamation-square"></i> account must have an email</span>
                                </li>
                                <li class="br-b_1 br_0  br_secondary-5  br_solid p_2 cell small-12 large-6">
                                    <i class="m-l_3 m-r_3 fal fa-map-pin"></i>
                                   {{location}}
                                </li>
                                <li v-if="hasBadge" class="br-b_1 br_0  br_secondary-5  br_solid p_2 cell small-12 large-6">
                                    <i class="m-l_3 m-r_3 fal fa-badge-check"></i>
                                    {{badgeNumber}}
                                    <a href="" class="link c_primary-4 float-right p-l_2 p-r_2"><i class="fal fa-exchange-alt"></i></a>
                                </li>
                                <li class="br-b_1 br_0  br_secondary-5  br_solid p_2 cell small-12 large-6">
                                    <i class="m-l_3 m-r_3 fal fa-user-circle"></i>
                                   {{userName}}
                                    <span class="c_alert" v-if="userName == ''"> <i class="fas fa-exclamation-square"></i> account must have a username</span>
                                </li>
                                <li class="br-b_1 br_0  br_secondary-5  br_solid p_2 cell small-12 large-6">
                                    <i class="m-l_3 m-r_3 fal fa-key"></i>
                                    {{password}}
                                    <span class="c_alert" v-if="password == ''"> <i class="fas fa-exclamation-square"></i> account must have a username</span>
                                </li>
                                <li class="cell small-12 large-6 p_2"><a v-on:click="make_primary" class="link c_primary-4 p_2"><i class="m-l_3 m-r_3  fas fa-crown"></i> make primary</a><a  v-on:click="$emit('breaklink')" class="link c_primary-4 float-right">break link<i class="m-l_3 m-r_3 fas fa-times"></i></a></li>
                            </ul>
                        </div>                        
                    </div>
                    <div class="cell shrink texture_medium bg_secondary-n3 m-r_3 c_secondary">
                        <ul class="flag no-bullet font_n1">
                            <li class="p_3 center member" v-bind:class="{ active: hasMembership }"><i class="fal fa-user-md"></i></li>
                            <li class="p_3 center accbadge" v-bind:class="{ active: hasBadge }"><i class="fal fa-badge-check"></i></li>
                            <li class="p_3 center iscience" v-bind:class="{ active: hasIScience }"><i class="fal fa-flask"></i></li>
                            <li class="p_3 center bruteforce" v-bind:class="{ active: hasBruteForceLock }"><i class="fal fa-lock-alt"></i></li>
                            <li class="p_3 center expobadge" v-bind:class="{ active: hasExpoBadge }"><i class="fal fa-exclamation-circle"></i></li>
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
    personifyNumber: Number,
    badgeNumber: { type: Number, default: -1 },
    emailAddress: String,
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
    return {
      email: this.emailAddress
    };
  },
  methods: {
    break_link: function() {},
    make_primary: function() {}
  }
};
</script>
<style lang="css">
</style>
