<template>
	<div class="grid-y">
		<div
			class="searchResults result card shadow_2 m_3 br_secondary-3"
			v-bind:class="{ selectable: selectable }"
		>
			<div class="select-container bg_acc" @click="select_toggle">
				<div class="p_3">
					<i v-if="!selected" class="far fa-circle c_white"></i>
					<i v-if="selected" class="fas fa-check-circle c_white"></i>
				</div>
			</div>
			<div class="detail-container">
				<div class="grid-x">
					<div class="cell auto">
						<div class="member-name font_1 font_slab line-height_2 member-name p_3 p-l_4 p-r_3">
							{{fullName}}
							<a
								@click="$emit('share-record')"
								class="bg_secondary-4 float-right font_0 hover:bg_secondary p-l_3 p-r_3 p_2"
							>
								<i class="fas fa-share-alt-square"></i>
							</a>
						</div>
						<div class>
							<ul class="details no-bullet p-l_3 p-r_3 m-b_0 font_0 grid-x grid-margin-x">
								<li class="br-b_1 br_0 br_secondary-5 br_solid p_2 cell small-12 large-6">
									<div v-if="hasMembership">
										<i class="m-l_3 m-r_3 c_secondary-2 fal fa-user-md"></i>
										{{memberType}}
									</div>
									<div v-if="!hasMembership">
										<i class="m-l_3 m-r_3 c_secondary-2 fal fa-user-slash"></i> NPI
									</div>
								</li>
								<li class="br-b_1 br_0 br_secondary-5 br_solid p_2 cell small-12 large-6">
									<i class="m-l_3 m-r_3 c_secondary-2 fal fa-hashtag"></i>
									{{personifyNumber}}
								</li>
								<li class="br-b_1 br_0 br_secondary-5 br_solid p_2 cell small-12 large-6">
									<i class="m-l_3 m-r_3 c_secondary-2 fal fa-at"></i>
									{{emailAddress}}
									<span class="c_alert" v-if="emailAddress == ''">
										<i class="fas fa-exclamation-square"></i> account must have an email
									</span>
									<a @click="$emit('open-email-reveal')" class="link float-right p_2">
										<i class="fal fa-pencil"></i>
									</a>
								</li>
								<li class="br-b_1 br_0 br_secondary-5 br_solid p_2 cell small-12 large-6">
									<i class="m-l_3 m-r_3 c_secondary-2 fal fa-map-pin"></i>
									{{location}}
								</li>
								<li v-if="hasBadge" class="br-b_1 br_0 br_secondary-5 br_solid p_2 cell small-12 large-6">
									<i class="m-l_3 m-r_3 c_secondary-2 fal fa-badge-check"></i>
									{{badgeNumber}}
									<a href class="link float-right p_2">
										<i class="fal fa-exchange-alt"></i>
									</a>
								</li>
								<li class="br-b_1 br_0 br_secondary-5 br_solid p_2 cell small-12 large-6">
									<i class="m-l_3 m-r_3 c_secondary-2 fal fa-user-circle"></i>
									{{userName}}
									<a
										href="#"
										class="link float-right p_2"
										@click="$emit('open-username-reveal')"
									>
										<i class="fal fa-pencil"></i>
									</a>
								</li>
								<li class="br-b_1 br_0 br_secondary-5 br_solid p_2 cell small-12 large-6">
									<i class="m-l_3 m-r_3 c_secondary-2 fal fa-key"></i>
									{{password}}
									<span v-if="password==''">******</span>
									<a href="#" class="link float-right p_2">
										<a href="#" class="link float-right p_2" @click="$emit('open-password-reveal')">
											<i class="fal fa-pencil"></i>
										</a>
									</a>
								</li>
							</ul>
						</div>
						<div class="p_4 cell small-12 large-6 flex font_n1">
							<i class="m-l_3 c_secondary-2 fal fa-users-crown flex-shrink"></i>
							<a
								class="link m-l_3 m-r_3 flex-auto"
								v-if="children != undefined"
								@click="showChildren_toggle"
							>
								<i v-if="showChildren" class="fas fa-chevron-circle-down p-r_3"></i>
								<i v-if="!showChildren" class="fas fa-chevron-circle-r p-r_3"></i>
								{{children.length}} linked account(s)
							</a>
							<a @click="selectable_toggle" class="link float-right m-l_3 m-r_3 flex-1">manage &nbsp;
								<i class="fal fa-pencil"></i>
							</a>
						</div>
					</div>
					<div class="cell shrink texture_light bg_secondary-3 m-r_3 c_secondary-1 font_n2">
						<ul class="flag no-bullet">
							<li class="p_3 center member" v-bind:class="{ active: hasMembership }">
								<i class="fal fa-user-md"></i>
							</li>
							<li class="p_3 center accbadge" v-bind:class="{ active: hasBadge }">
								<i class="fal fa-badge-check"></i>
							</li>
							<li class="p_3 center iscience" v-bind:class="{ active: hasIScience }">
								<i class="fal fa-flask"></i>
							</li>
							<li
								v-if="hasBruteForceLock"
								class="p_3 center bruteforce active"
								@click="$emit('open-bruteforce-reveal');"
							>
								<i class="fal fa-lock-alt"></i>
							</li>
							<li v-else class="p_3 center bruteforce">
								<i class="fal fa-lock-alt"></i>
							</li>
							<li class="p_3 center expobadge" v-bind:class="{ active: hasExpoBadge }">
								<i class="fal fa-exclamation-circle"></i>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<transition-group name="slideInDown" tag="div">
			<linkedResult
				v-if="showChildren"
				v-for="(child, index) in children"
				v-bind="child"
				v-on:breaklink="$emit('breakLinkRepeater',{child:child})"
				v-bind:key="index"
			/>
		</transition-group>
	</div>
</template>
<script>
import linkedResult from "@/components/linkedResult.vue";

export default {
  name: "searchResults",
  components: {
    linkedResult
  },
  props: {
    member: Object,
    fullName: String,
    personifyNumber: Number,
    badgeNumber: { type: Number, default: -1 },
    emailAddress: { type: String, default: "" },
    location: String,
    userName: String,
    password: String,
    memberType: { type: String, default: "NPI" },
    iscienceBadge: { type: Number, default: -1 },
    bruteForceLock: { type: Boolean, default: false },
    expoBadge: { type: Boolean, default: false },
    children: { type: Array, default: undefined }
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
      selectable: false,
      selected: true,
      showChildren: false
    };
  },
  methods: {
    set_selectable: function($set) {
      this.selectable = $set;
    },
    selectable_toggle: function() {
      this.selectable = !this.selectable;
    },
    showChildren_toggle: function() {
      this.showChildren = !this.showChildren;
    },
    select_toggle: function() {
      if (this.selectable) {
        this.selected = !this.selected;
      }
    }
  }
};
</script>
<style lang="scss">
.slideIn-enter-active,
.slideIn-leave-active {
  transition: transform 0.5s ease, opacity 0.25s ease 0.25s;
}
.slideIn-enter, .slideIn-leave-to /* .slideIn-leave-active below version 2.1.8 */ {
  transform: translateX(-100%);
  opacity: 0;
}
.slideIn-enter-to {
  transform: translateX(1);
  opacity: 1;
}
.slideInDown-enter-active,
.slideInDown-leave-active {
  transition: transform 0.5s ease, opacity 0.25s ease 0.25s;
}
.slideInDown-enter, .slideInDown-leave-to /* .slideIn-leave-active below version 2.1.8 */ {
  transform: translateY(-100%);
  opacity: 0;
}
.slideInDown-enter-to {
  transform: translateY(1);
  opacity: 1;
}
.slideInDown-move {
  transition: transform 0.5s ease;
}

.result {
  display: flex;
  flex-direction: row;
  position: relative;
}

.searchResults {
  z-index: 100;
}

.select-container {
  flex: 0 0 2.25rem;
  padding: 0;
  text-align: center;
  max-width: 0;
  transition: max-width 0.5s;
}

.selectable .select-container {
  max-width: 200px;
}

.detail-container {
  flex: 1 1 auto;
}

.flag .active {
  color: white;
}

.flag .member.active {
  background-color: #2e3192;
}

.flag .accbadge.active {
  background-color: #00a400;
}

.flag .iscience.active {
  background-color: #6233c9;
}

.flag .bruteforce.active {
  background-color: #c70a0a;
}

.flag .expobadge.active {
  background-color: #db6d12;
}

.bounce-transition {
  display: inline-block;
}

.bounce-enter {
  width: 2rem;
  animation: bounce-in 0.5s;
}

.bounce-leave-to {
  animation: bounce-out 0.5s;
}

@keyframes bounce-in {
  0% {
    transform: translateX(0rem) scaleX(1);
  }

  25% {
    transform: translateX(0.25rem) scaleX(1.25);
  }

  100% {
    transform: translateX(-2rem) scaleX(0);
  }
}

@keyframes bounce-out {
  0% {
    transform: translateX(0rem) scaleX(1);
  }

  25% {
    transform: translateX(0.25rem) scaleX(1.25);
  }

  100% {
    transform: translateX(-2rem) scaleX(0);
  }
}
</style>
