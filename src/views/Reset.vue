<template>
	<div class="grid-x">
		<div class="cell small-12 medium-10 large-8 m_auto" style="max-width:54em">
			<div class="card shadow_2 cell">
				<div
					class="card-divider c_white font_3 p_4 texture_dust"
					style="z-index:10"
					v-bind:class="{'bg_alert': pageHasError() , 'bg_primary': !pageHasError()}"
					@click="pageValidation('empty')"
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
													<ul class="no-bullet font_n2 p_2 small-12">
														<li v-on:click="openPasswordStrengthReveal()">
															<i class="far icon-complete_check-circle"></i>
															password strength
															<span class="font_bold c_alert-n2">weak</span>
															<span class="c_primary h:underline float-right">
																help
																<i class="fas fa-question-circle"></i>
															</span>
														</li>
														<li>
															<i class="far icon-complete_check-circle"></i>1 capital letter
														</li>
														<li>
															<i class="far icon-complete_check-circle"></i>1 lowercase letter
														</li>
														<li>
															<i class="far icon-complete_check-circle"></i>1 special character
														</li>
														<li>
															<i class="far icon-complete_check-circle"></i>1 number
														</li>
														<li>
															<i class="far icon-complete_check-circle"></i>8 characters long
														</li>
													</ul>
												</div>
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
												<div class="grid-x c_secondary-1 font_n1 font_italic">
													<ul class="no-bullet font_n2 p_2">
														<li v-bind:class="{'is-complete font_bold c_success': onPasswordConfirmed}">
															<i class="far icon-complete_check-circle"></i> passwords confirmed
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</form>
							<div class="grid-container clearfix">
								<div class="grid-x justify-end">
									<div class="medium-4 cell m-t_4 m-t_0:medium p-t_4">
										<a
											@click="pageValidation('empty')"
											v-if="submitDisabled"
											class="button display-block color_white m-b_0 br_radius expanded disabled"
										>
											Change Password
											<i class="fal fa-ban"></i>
										</a>
										<router-link
											to="/resetSuccess"
											v-if="!submitDisabled"
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
					<router-link class="link secondary underline" to="/login/product">
						<i class="fas fa-arrow-left"></i> return to log in.
					</router-link>
				</div>
			</div>
		</div>
		<reveal ref="passwordStrength">
			<h3 slot="header">Password Strength</h3>
			<div slot="content">
				<div class>
					<p
						class="font_bold font_1 lh_2"
					>Passwords must be 8 characters long and must include all of the bellow.</p>
					<ul class="no-bullet">
						<li class="clearfix">
							At least one capital letter
							<i class="fas fas-info-square"></i>
							<div class="br_radius d_none bg_secondary-5 p_2 grid-x font_bold">
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">A</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">B</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">C</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">D</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">E</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">F</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">G</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">H</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">I</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">J</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">K</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">L</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">M</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">N</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">O</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">P</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">Q</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">R</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">S</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">T</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">U</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">V</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">W</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">X</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">Y</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">Z</span>
							</div>
						</li>
						<li class="clearfix">
							At least one lowercase letter
							<i class="fas fas-info-square"></i>
							<div class="br_radius d_none bg_secondary-5 p_2 grid-x font_bold">
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">a</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">b</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">c</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">d</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">e</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">f</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">g</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">h</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">i</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">j</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">k</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">l</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">m</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">n</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">o</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">p</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">q</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">r</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">s</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">t</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">u</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">v</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">w</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">x</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">y</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">z</span>
							</div>
						</li>
						<li class="clearfix">
							At least one special character
							<i class="fas fas-info-square"></i>
							<div class="br_radius d_none bg_secondary-5 p_2 grid-x font_bold">
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">{</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">}</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">[</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">]</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">(</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">)</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">&lt;</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">&gt;</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">:</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">&apos;</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">&quot;</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">?</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">/</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">|</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">`</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">~</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">!</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">@</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">#</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">$</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">%</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">^</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">&amp;</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">*</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">_</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">-</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">+</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">=</span>
							</div>
						</li>
						<li class="clearfix">
							At least one number
							<i class="fas fas-info-square"></i>
							<div class="br_radius d_none bg_secondary-5 p_2 grid-x font_bold">
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">1</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">2</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">3</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">4</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">5</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">6</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">7</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">8</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">9</span>
								<span class="cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius">0</span>
							</div>
						</li>
					</ul>
				</div>
				<div class="grid-x">
					<div class="cell auto bg_alert-4 br_radius text-center m_2 p_4">
						<h5>
							<span class="font_2">
								<i class="fa fa-thumbs-down"></i>
							</span>&nbsp;Weak Password
						</h5>
						<div class="p_3 br_solid br_black-3 bg_white-3 br_1 br_radius br_solid">
							<span>Checkup1!</span>
						</div>
					</div>
					<div class="cell auto bg_success-4 br_radius text-center m_2 p_4">
						<h5>
							<span class="font_2">
								<i class="fa fa-thumbs-up"></i>
							</span>&nbsp;Strong Password
						</h5>
						<div class="p_3 br_solid br_black-3 bg_white-3 br_1 br_radius br_solid">
							<span>Ch#c&gt;Up214</span>
						</div>
					</div>
				</div>
				<div class="grid-x flex-row-reverse">
					<div class="cell shrink p-t_2 float-right">
						<button
							class="button secondary expanded small m-b_0 radius"
							data-close
							aria-label="Close modal"
						>Close</button>
					</div>
				</div>
			</div>
		</reveal>
	</div>
</template>

<script>
// @ is an alias to /src
import inputPassword from "@/components/inputPassword.vue";
import reveal from "@/components/Reveal.vue";

export default {
	name: "reset",
	components: {
		inputPassword,
		reveal
	},
	data() {
		return {
			username: "",
			password: "",
			password_1: "",
			password_2: "",
			pageError: "",
			mode: "resetPassword"
		};
	},
	computed: {
		onPasswordConfirmed: function() {
			if (
				this.password_1 != "" &&
				this.password_2 != "" &&
				this.password_1 === this.password_2
			) {
				return true;
			} else {
				return false;
			}
		},
		submitDisabled: function() {
			if (
				this.password_1 != "" &&
				this.password_2 != "" &&
				this.password_1 === this.password_2
			) {
				this.pageError = "";
				return false;
			}

			return true;
		}
	},
	methods: {
		pageHasError: function() {
			if (this.pageError != "") {
				return true;
			}
			return false;
		},
		pageValidation(error) {
			if (error == "empty") {
				this.pageError = "Please complete the inputs.";
			} else if (error == "notMatching") {
				this.pageError = "Your passwords don't match eachother.";
			} else {
				this.pageError = "";
			}
		},

		onModeChange(value) {
			this.pageError = "";
			this.mode = value;
		},
		openPasswordStrengthReveal() {
			this.$refs.passwordStrength.openReveal();
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
