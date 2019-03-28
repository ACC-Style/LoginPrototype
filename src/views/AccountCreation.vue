<template>
	<div id="createAccountStart" class="grid-x">
		<div class="cell small-12 medium-10 large-8 m_auto" style="max-width:54em">
			<div class="card shadow_3">
				<div
					class="card-divider c_white font_display font_3 p_4 texture_dust"
					style="z-index:10"
					v-bind:class="{'bg_alert': !pageHasError , 'bg_primary': pageHasError}"
					@click="pageValidation('Your email and password does not match our records.')"
				>Creating an account</div>
				<div class="grid-container card-section p-b_4">
					<div class="grid-x">
						<div class="cell small-12 medium-8 m_auto">
							<p>Enter your prefered email bellow and we will get you started with your new account.</p>
						</div>
					</div>
					<div class="grid-x">
						<div class="cell small-12 medium-8 m_auto">
							<emailInput
								class="font_4 text-left"
								:label="'Email'"
								:required="true"
								:pageHasError="false"
								:value="email"
								:hint="''"
								:icon="'fa-at'"
								v-on:update:username="email = $event"
							></emailInput>
							<div class="text-right">
								<div
									v-if="email==''"
									class="button radius m-t_3 disabled"
									@click="pageValidation('Please Follow Instructions')"
								>Submit</div>
								<router-link v-if="email!=''" class="button radius m-t_3" to="/reset">Submit</router-link>
							</div>
						</div>
					</div>
				</div>
				<div class="p_3 font_n1 text-center bg_secondary-4">
					<router-link class="link secondary underline" to="/login/product">
						<i class="fas fa-arrow-left"></i> return to log in.
					</router-link>
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
			email: "",
			mode: "start",
			pageHasError: "false"
		};
	},
	methods: {
		checkDuplicateEmail: function() {
			return false;
		},
		onModeChange: function(modeChange) {
			this.mode = modeChange;
		}
	}
};
</script>

<style scoped>
</style>