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
						<span v-if=" mode == 'login'">Login</span>
						<span v-if="mode == 'resetStart'">Password Reset</span>
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
						<div v-if=" mode == 'login' " key="login">
							<form class="grid-container clearfix">
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
							<div class="grid-container clearfix">
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
						<div v-if="mode == 'resetStart'" key="start">
							<form class="grid-container m_auto" style="max-width:35em;">
								<div class="grid-x">
									<div class="cell auto">
										<p class="font_1">Select the most convient way to reset your password</p>
										<ul class="no-bullet">
											<li>
												<a
													href
													class="button secondary expanded br_radius hollow hover:bg_secondary-4"
												>Text me an unlock code</a>
											</li>
											<li>
												<a
													href
													class="button secondary expanded br_radius hollow hover:bg_secondary-4"
												>Email me a reset link</a>
											</li>
											<li>
												<a
													href
													class="button secondary expanded br_radius hollow hover:bg_secondary-4"
												>Answer security questions</a>
											</li>
											<li
												@click="onModeChange('login')"
												class="text-center hover:bg_secondary-5 font_0 underline hover:none c_primary center p-x_5 p-y_2 br_radius"
											>go back to login</li>
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


