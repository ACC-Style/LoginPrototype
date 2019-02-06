<template>
	<div class="grid-x">
		<div class="cell small-12 medium-10 large-8 m_auto" style="max-width:54em">
			<div class="card shadow_2 cell">
				<div
					class="card-divider color_white font-size_3 p_4 texture_dust"
					style="z-index:10"
					v-bind:class="{'bg_alert': pageHasError() , 'bg_primary': !pageHasError()}"
					@click="pageValidation()"
				>
					<transition name="crossFade" mode="out-in">
						<span v-if="mode == 'resetPassword'">Please enter your new password.</span>
					</transition>
				</div>
				<div class="card-section relative">
					<transition name="slideInDown">
						<div v-if="pageHasError()" style="z-index:0" class="bg_alert-4 font_0 m-b_0 m_n4 p_3">
							<p class="m-b_0">
								<span class="font_bold">Error Loging In:</span>
								{{pageError}}
							</p>
						</div>
					</transition>
					<transition name="slideInRight" mode="out-in">
						<div v-if="mode == 'resetPassword'" key="start">
							<form class="grid-container m_auto">
								<div class="grid-x">
									<div class="cell auto">
										<p
											class="font_0 lh_3 bold p-y_3 c_secondary-n3"
										>Your new passwords must be at least 7 characters long. Password must include numbers and characters with one special characters and a capital letter.</p>
										<div class="grid-x grid-margin-x">
											<div class="cell large-6">
												<inputPassword
													class="m-t_4 m-t_0:medium"
													:label="'Password'"
													:required="true"
													:pageHasError="pageHasError()"
													:value="password_1"
													:hint="''"
													v-on:update:password="password_1 = $event"
												></inputPassword>
											</div>
											<div class="cell large-6">
												<inputPassword
													class="m-t_4 m-t_0:medium"
													:label="'Confirm Password'"
													:required="true"
													:pageHasError="pageHasError()"
													:value="password_2"
													:hint="'passwords must match'"
													v-on:update:password="password_2 = $event"
												></inputPassword>
											</div>
										</div>
									</div>
								</div>
							</form>
							<div class="grid-container clearfix">
								<div class="grid-x justify-end">
									<div class="medium-4 cell m-t_4 m-t_0:medium p-t_4">
										<a
											@click="pageValidation()"
											v-if="!submitDisabled()"
											class="button display-block color_white m-b_0 br_radius expanded disabled"
										>
											Change Password
											<i class="fal fa-ban"></i>
										</a>
										<router-link
											to="/search"
											v-if="submitDisabled()"
											class="button display-block color_white m-b_0 br_radius expanded"
										>
											Change Password
											<i class="fal fa-arrow-alt-right"></i>
										</router-link>
									</div>
								</div>
							</div>
						</div>
					</transition>
				</div>
				<div class="p_3 font_n1 text-center bg_secondary-4">
					<router-link class="link secondary underline" to="/login">
						<i class="fas fa-sign-out-alt"></i> return to log in.
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import inputPassword from "@/components/inputPassword.vue";

export default {
	name: "reset",
	components: {
		inputPassword
	},
	data() {
		return {
			username: "",
			password: "",
			pageError: "",
			mode: "resetPassword"
		};
	},
	methods: {
		submitDisabled: function() {
			if (this.password_1 != "" && this.password_2 != "") {
				return true;
			}
			return false;
		},
		pageHasError: function() {
			if (this.pageError != "") {
				return true;
			}
			return false;
		},
		pageValidation() {
			if (this.pageError == "") {
				this.pageError =
					"Your email and password does not match our records.";
			} else {
				this.pageError = "";
			}
		},
		onModeChange(value) {
			this.pageError = "";
			this.mode = value;
		}
	}
};
</script>

<style lang="scss" scoped>
.logo-lockup {
	display: flex;
	flex-direction: column;
	@media only screen and (min-width: 500px) {
		flex-direction: row;
	}
}

.logo-lockup .logo {
	height: 40px;
	flex: 0 1 0px;
	margin-bottom: 0.5rem;
	@media only screen and (min-width: 500px) {
		height: 80px;
	}
}

.logo-lockup .text {
	flex: 1 1 auto;
	line-height: 1;
	font-size: 24px;
	align-self: center;
	border-top: 3px solid #00386b;
	padding-top: 1rem;
	text-align: center;
	color: #00386b;
	@media only screen and (min-width: 500px) {
		border-left: 3px solid #00386b;
		padding-left: 1rem;
		text-align: left;
		padding-top: 0;
		border-top: 0 none;
		font-size: 40px;
	}
}

.slideInRight-enter-active,
.slideInRight-leave-active {
	transition: transform 0.5s ease, opacity 0.25s ease 0.25s;
}
/*.slideInRight-enter-active {
	transition-delay: 0.5s;
}*/
.slideInRight-leave-to /* .slideIn-leave-active below version 2.1.8 */ {
	transform: translateX(-100%);
	opacity: 0;
}
.slideInRight-enter /* .slideIn-leave-active below version 2.1.8 */ {
	transform: translateX(100%);
	opacity: 0;
}
.slideInRight-enter-to {
	transform: translateX(1);
	opacity: 1;
}
.slideInRight-move {
	transition: transform 0.5s ease;
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
}

.crossFade-enter-active,
.crossFade-leave-active {
	transition: opacity 0.25s ease 0.25s;
}

.crossFade-leave-to /* .slideIn-leave-active below version 2.1.8 */ {
	opacity: 0;
}
.crossFade-enter /* .slideIn-leave-active below version 2.1.8 */ {
	opacity: 0;
}
.crossFade-enter-to {
	opacity: 1;
}
.crossFade-move {
	transition: opacity 0.5s ease;
}
</style>
