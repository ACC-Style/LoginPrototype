<template>
	<div class="home texture_light p_4" style="height:100vh;">
		<div class="grid-x">
			<div class="cell small-12 medium-10 large-8 m_auto" style="max-width:54em">
				<div>
					<h1 class="logo-lockup p-b_3">
						<img src="assets/img/mobileLogo.svg" alt="American College of Cardiology" class="logo p-r_3">
						<span class="text">Customer &nbsp;
							<br class="show-for-medium">Service Tool
						</span>
					</h1>
				</div>
				<div class="card shadow_2 cell">
					<div
						class="card-divider color_white font-size_3 p_4 texture_dust"
						style="z-index:10"
						v-bind:class="{'bg_alert': pageHasError() , 'bg_primary': !pageHasError()}"
						@click="pageValidation()"
					>ACC Staff Login</div>
					<div class="card-section">
						<transition name="slideInDown">
							<div v-if="pageHasError()" style="z-index:0" class="bg_alert-4 font_0 m-b_0 m_n4 p_3">
								<p class="m-b_0">
									<span class="font_bold">Error Loging In:</span>
									{{pageError}}
								</p>
							</div>
						</transition>
						<transition name="slideInRight">
							<div v-if=" mode == 'login' ">
								<form class="grid-container">
									<div class="grid-x grid-padding-x p-y_3">
										<div class="medium-6 cell">
											<inputUsername
												class="m-t_2 m-t_0:medium"
												:label="'Username'"
												:required="true"
												:pageHasError="pageHasError()"
												:value="username"
												:hint="''"
												v-on:update:username="username = $event"
											></inputUsername>
										</div>
										<div class="medium-6 cell">
											<inputPassword
												class="m-t_4 m-t_0:medium"
												:label="'Password'"
												:required="true"
												:pageHasError="pageHasError()"
												:value="password"
												:hint="''"
												v-on:update:password="password = $event"
											></inputPassword>
											<div
												class="hover:underline float-right m-t_3 m-t_0:medium"
												@click="onModeChange('resetStart')"
											>reset my password</div>
										</div>
									</div>
								</form>
								<div class="grid-container">
									<div class="grid-x justify-end">
										<div class="medium-4 cell m-t_4 m-t_0:medium">
											<a
												@click="pageValidation()"
												v-if="!submitDisabled()"
												class="button display-block color_white m-b_0 br_radius expanded disabled"
											>
												Log In
												<i class="fal fa-ban"></i>
											</a>
											<router-link
												to="/search"
												v-if="submitDisabled()"
												class="button display-block color_white m-b_0 br_radius expanded"
											>
												Log In
												<i class="fal fa-arrow-alt-right"></i>
											</router-link>
										</div>
									</div>
								</div>
							</div>
						</transition>
						<transition name="slideInRight">
							<div v-if="mode == 'resetStart'">
								<form class="grid-container">
									<div class="grid-x">
										<div class="cell auto">
											<h1 class="font_2">Password Reset</h1>
											<p class="font_1">Select the most convient way to reset your password</p>
											<ul class="no-bullet">
												<li>
													<a href class="button primary exapnded">Text me an unlock code</a>
												</li>
												<li>
													<a href class="button primary exapnded">Email me a reset link</a>
												</li>
												<li>
													<a href class="button primary exapnded">Answer security questions</a>
												</li>
											</ul>
										</div>
									</div>
								</form>
							</div>
						</transition>
					</div>
					<div class="texture_light p_3 text-center">
						<a class="link secondary hover:underline">I don't have an account</a>
					</div>
				</div>
				<div class="p_3 font_n1 text-center">
					<router-link class="link secondary underline" to="/about">
						<i class="fas fa-info-square"></i> About this utility
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import inputPassword from "@/components/inputPassword.vue";
import inputUsername from "@/components/inputUsername.vue";

export default {
	name: "login",
	components: {
		inputPassword,
		inputUsername
	},
	data() {
		return {
			username: "",
			password: "",
			pageError: "",
			mode: "login"
		};
	},
	methods: {
		submitDisabled: function() {
			if (this.username != "" && this.password != "") {
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
				this.pageError = "Your email and password does not match our records.";
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
}
</style>
