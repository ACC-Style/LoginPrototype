<template>
	<div id="createAccountStart" class="grid-x">
		<div class="cell small-12 medium-10 large-8 m_auto" style="max-width:54em">
			<div class="card shadow_2 cell">
				<div
					class="card-divider color_white font_3 p_4 texture_dust bg_primary"
					style="z-index:10"
				>Create New Account</div>
				<div class="card-section relative">
					<p class="font_0">Please give us your prefered Email so we can create your account</p>
					<emailInput
						class="font_4 text-left"
						:label="'Email'"
						:required="true"
						:value="email"
						:hint="''"
						:icon="'fa-at'"
						v-on:update:inputUsername="email = $event"
					></emailInput>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
import emailInput from "@/components/inputUsername.vue";
export default {
	name: "createAccountStart",
	components: {
		emailInput
	},
	data() {
		return {
			email: ""
		};
	},
	methods: {
		checkDuplicateEmail: function() {
			return false;
		}
	}
};
</script>

<style scoped>
</style>