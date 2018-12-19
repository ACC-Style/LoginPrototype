<template>
	<div class="Shared p_4">
		<h1>Shared Results</h1>
		<div
			v-if="shares.length == 0"
			class="m-t_4 p_4 texture_light bg_info-2 shadow_n3 br_radius"
		>You Currently have no shared member accounts.</div>

		<div v-for="(share , index) in shares" :key="index" class="card shadow_2 m-b_3">
			<div class="card-body">
				<div class="detail-container color_black">
					<div class>
						<div class>
							<div
								class="member-name font_3 font_slab line-height_2 member-name p_3 p-l_4 p-r_3 color_ACC"
							>{{share.memberName}}</div>
							<ul class="details font_2 no-bullet p-x_4 m-b_3">
								<li class="br-b_1 br_0 br_secondary-5 br_solid p_2">
									<span class="c_secondary-3">
										<i class="m-x_2 c_secondary-3 fal fa-hashtag"></i>
										ID:
									</span>
									{{share.personifyNumber}}
								</li>
								<li class="br-b_1 br_0 br_secondary-5 br_solid p_2">
									<span class="c_secondary-3">
										<i class="m-x_2 c_secondary-3 fal fa-badge-check"></i>
										BADGE:
									</span>
									{{share.badgeNumber}}
									<span
										class="c_alert"
										v-if="share.badgeNumber == '' || share.badgeNumber == undefined"
									>
										<i class="fas fa-exclamation-square"></i> No badge on account
									</span>
								</li>
								<li class="br-b_1 br_0 br_secondary-5 br_solid p_2 overflow-hidden ellipsis">
									<span class="c_secondary-3">
										<i class="m-x_2 c_secondary-3 fal fa-at"></i>
										EMAIL:
									</span>
									{{share.emailAddress}}
									<span
										class="c_alert"
										v-if="share.emailAddress == '' || share.emailAddress == undefined"
									>
										<i class="fas fa-exclamation-square"></i> Account must have an email
									</span>
								</li>
							</ul>
							<div class="p-x_5">
								<a
									class="button small expanded link color_primary m-b_3 font_0"
									@click="openMemberRecord(share.personifyNumber)"
								>
									open member record
									<i class="m-l_3 m-r_3 fas fa-arrow-square-r"></i>
								</a>
							</div>
							<div
								class="card-divider text-center font_light font_0 line-height_1 member-name p-l_4 p-r_4 p_2"
							>
								<span class="color_info font_bold">Shared By: {{share.sharedBy}}&nbsp;</span>
								
								<span class="font_normal">
									<i class="fal fa-clock"></i>
									{{share.timestamp}}
								</span>
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
