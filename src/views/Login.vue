<template>
	<div class="grid-x">
		<div class="cell small-12 medium-10 large-8 m_auto" style="max-width:54em">
			<div class="card shadow_2 cell">
				<div
					class="card-divider c_white font_display font_3 p_4 texture_dust"
					style="z-index:10"
					v-bind:class="{'bg_alert': pageHasError() , 'bg_primary': !pageHasError()}"
					@click="pageValidation()"
				>
					<transition name="crossFade" mode="out-in">
						<span v-if=" mode == 'login'">Login</span>
						<span v-if="mode == 'resetStart'">Password Reset</span>
						<span v-if="mode == 'resetByPhone'">Password Reset</span>
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
											class="m-t_2 m-t_0:md"
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
											class="m-t_4 m-t_0:md"
											:label="'Password'"
											:required="true"
											:pageHasError="pageHasError()"
											:value="password"
											:hint="''"
											v-on:update:password="password = $event"
										></inputPassword>
										<div class="row">
											<div
												class="alert progress m_0"
												role="progressbar"
												tabindex="0"
												aria-valuenow="25"
												aria-valuemin="0"
												aria-valuetext="25 percent"
												aria-valuemax="100"
												style="height:3px"
											>
												<div class="progress-meter" style="width: 10%">
													<p class="progress-meter-text"></p>
												</div>
											</div>
										</div>
										<div class="grid-x c_secondary-1 font_n1 font_italic">
											<div class="cell auto">
												<span
													class="h:underline float-left m-t_2 m-t_0:md h:c_black"
													@click="openPasswordStrengthReveal()"
												>
													<i class="fas fa-question-circle"></i>
													password strength:
													<span class="font_bold c_alert-n2">weak</span>
												</span>
											</div>
											<div class="cell auto">
												<span
													class="h:underline float-right m-t_2 m-t_0:md h:c_black"
													@click="onModeChange('resetStart')"
												>reset my password</span>
											</div>
										</div>
									</div>
								</div>
							</form>
							<div class="grid-container clearfix">
								<div class="grid-x justify-end">
									<div class="medium-4 cell m-t_4 m-t_0:md">
										<a
											@click="pageValidation()"
											v-if="!submitDisabled()"
											class="button display-block c_white m-b_0 br_radius expanded disabled"
										>
											Log In
											<i class="fal fa-ban"></i>
										</a>
										<router-link
											to="/search"
											v-if="submitDisabled()"
											class="button display-block c_white m-b_0 br_radius expanded"
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
													@click="onModeChange('resetByPhone')"
													class="button secondary expanded br_radius hollow h:bg_secondary-4"
												>Text me an unlock code</a>
											</li>
											<li>
												<a
													class="button secondary expanded br_radius hollow h:bg_secondary-4"
												>Email me a reset link</a>
											</li>
											<li>
												<a
													class="button secondary expanded br_radius hollow h:bg_secondary-4"
												>Answer security questions</a>
											</li>
											<li
												@click="onModeChange('login')"
												class="text-center h:bg_secondary-5 font_0 underline h:none c_primary center p-x_5 p-y_2 br_radius"
											>go back to login</li>
										</ul>
									</div>
								</div>
							</form>
						</div>
						<div v-if="mode == 'resetByPhone'" key="resetByPhone">
							<div class="grid-container p_5">
								<p class="font_1 text-center">
									We have sent you an access code to
									<strong class="c_primary">
										***-***-
										<span class="font_italic">5555</span>
									</strong>
								</p>
								<div class="grid-x">
									<div class="cell center small-4 small-offset-4 text-right">
										<accessCodeInput
											class="font_4 text-left"
											:label="'Access Code'"
											:required="true"
											:pageHasError="pageHasError()"
											:value="accessCode"
											:hint="''"
											v-on:update:accessCode="accessCode = $event"
										></accessCodeInput>
										<a v-if="!submitAccessDisabled()" class="button radius m-t_3 disabled" to="/reset">Submit</a>

										<router-link v-if="submitAccessDisabled()" class="button radius m-t_3" to="/reset">Submit</router-link>
									</div>
								</div>
							</div>
						</div>
					</transition>
				</div>
				<div class="texture_light p_3 text-center">
					<a class="link secondary h:underline">I don't have an account</a>
				</div>
			</div>
			<div class="p_3 font_n1 text-center">
				<router-link class="link secondary underline" to="/about">
					<i class="fas fa-info-square"></i> About this utility
				</router-link>
			</div>
		</div>
		<reveal ref="passwordStrength">
			<h3 slot="header">Password Strength</h3>
			<div slot="content">
				<div class>
					<p>Your password must include all of the bellow.</p>
					<ul>
						<li>8 characters long</li>
						<li>1 capital letter</li>
						<li>1 special character</li>
					</ul>
				</div>
				<div class>
					<div class="p-t_2">
						<button
							class="button secondary expanded small m-b_0"
							data-close
							aria-label="Close modal"
						>Cancel</button>
					</div>
				</div>
			</div>
		</reveal>
	</div>
</template>

<script>
// @ is an alias to /src
import inputPassword from "@/components/inputPassword.vue";
import inputUsername from "@/components/inputUsername.vue";
import accessCodeInput from "@/components/accessCode.vue";
import reveal from "@/components/Reveal.vue";

export default {
	name: "login",
	components: {
		inputPassword,
		inputUsername,
		accessCodeInput,
		reveal
	},
	data() {
		return {
			username: "",
			password: "",
			accessCode: "",
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
		submitAccessDisabled: function() {
			if (this.accessCode != "") {
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
		},
		openPasswordStrengthReveal: function(member) {
			this.$refs.passwordStrength.openReveal();
		}
	}
};
</script>


