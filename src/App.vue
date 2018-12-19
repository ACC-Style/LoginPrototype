<template>
	<div id="app">
		<div class="viewport texture_light">
			<router-view v-on:history-new-off="HISTORY_NEW_OFF" v-on:share-new-off="SHARE_NEW_OFF"/>
		</div>

		<div id="nav" class="bg_acc grid-x c_white shadow_5 font_2">
			<router-link
				class="auto text-center p_2 cell center clear c_secondary-5 c_white hover:c_primary-4 m-b_0"
				to="/"
			>
				<i class="fas fa-sign-out-alt"></i>
			</router-link>
			<router-link
				class="auto text-center p_2 cell center clear c_secondary-5 c_white hover:c_primary-4 m-b_0"
				to="/search"
			>
				<i class="fas fa-search"></i>
			</router-link>
			<router-link
				class="auto text-center p_2 cell center clear c_secondary-5 c_white hover:c_primary-4 m-b_0"
				to="/shared"
			>
				<span class="fa-layers fa-fw">
					<i class="fas fa-share-alt-square"></i>
					<span
						v-if="sharesNew"
						class="fa-layers-counter font_n3 p_1 line-height_1 p-l_2 p-r_2 text-center font_bold br_round bg_warning-n1 br_1 br_solid"
					>{{shares.length}}</span>
				</span>
			</router-link>
			<router-link
				class="auto text-center p_2 cell center clear c_secondary-5 c_white hover:c_primary-4 m-b_0"
				to="/history"
			>
				<span class="fa-layers fa-fw">
					<i class="fas fa-history"></i>
					<span
						v-if="searchHistoryNew"
						class="fa-layers-counter font_n3 p_1 line-height_1 p-l_2 p-r_2 text-center font_bold br_round bg_warning-n1 br_1 br_solid"
					>{{searchHistory.length}}</span>
				</span>
			</router-link>
			<router-link
				class="auto text-center p_2 cell center clear c_secondary-5 c_white hover:c_primary-4 m-b_0"
				to="/about"
			>
				<i class="fas fa-info-square"></i>
			</router-link>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
	name: "App",
	data() {
		return {};
	},
	computed: {
		...mapState([
			"sharesNew",
			"shares",
			"searchHistoryNew",
			"searchHistory"
		])
	},
	methods: {
		...mapMutations(["HISTORY_NEW_OFF", "SHARE_NEW_OFF"])
	}
};
</script>
<style lang="scss">
.viewport {
	min-height: 100vh;
	overflow-x: hidden;
}
#nav {
	position: sticky;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 1000;
}
#nav .router-link-exact-active {
	background-color: #198dae;
}
.fa-layers {
	position: relative;
}
.fa-layers-counter {
	position: absolute;
	top: -0.5em;
	right: -1em;
	border: #00386b;
}
.router-link-exact-active .fa-layers-counter {
	border: #198dae;
}
</style>
