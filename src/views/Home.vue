<template>
	<div class="home texture_light padding_4" style="height:100vh;">
		<div class="grid-x">
			<div class="cell small-10 medium-8 large-6 margin_auto">
				<div>
					<h1 class="logo-lockup padding-bottom_3"><img src="assets/img/mobileLogo.svg" alt="American College of Cardiology" class="logo"><span class="text">Customer<br>Service Tool</span></h1>
				</div>
				<div class="card shadow_2 cell  ">
					<div class="card-divider color_white font-size_3 padding_4 texture_dust" style="z-index:10"  v-bind:class="{'back_alert': pageHasError() , 'back_primary': !pageHasError()}"  @click="pageValidation()" >
						ACC Staff Login
					</div>
					<div class="card-section">
						<transition name="slideInDown">
								<div v-if="pageHasError()" style="z-index:0" class="back_alert-2 font_0 margin-bottom_0 margin_n4 padding_3 shadow_n2"> <p><span class="font_bold">Error Loging In:</span>  {{pageError}}</p></div>
						</transition>
						<form class="grid-container">
						    <div class="grid-x grid-padding-x padding-top_3">
						        <div class="medium-6 cell">
						                <label v-bind:class="{'color_alert': pageHasError()}">Username  <input type="text" v-model="username" placeholder="youremail@acc.org" required  v-bind:class="{'border_alert': pageHasError()}"></label>
						        </div>
						        <div class="medium-6 cell">
						                <label v-bind:class="{'color_alert': pageHasError()}">Password  <input type="password" v-model="password" placeholder="password" required  v-bind:class="{'border_alert': pageHasError()}"></label>
						            
						        </div>
						    </div>
						</form>
						<div class="grid-container">
							<div class="grid-x justify-end">
								<div class="medium-4 cell ">
										<router-link to="/search" v-bind:class="{disabled: !submitDisabled()}" class="button display-block color_white margin-bottom_0 border_radius expanded">Log In <i class="fal fa-arrow-alt-right"></i></router-link>
									</div>
							</div>
						</div>
					</div>
				</div>
				<div class="padding_3 font_n1 text-center">
					<a href="/#/about" class="link secondary text_underline">About this Utlity</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
  data() {
    return {
      username: "",
      password: "",
      pageError: ""
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
      this.pageError = "Your email and password does not match our records.";
    }
  }
};
</script>
<style  scoped>
.margin-bottom_0 {
  margin-bottom: 0 !important;
}

.logo-lockup {
  display: flex;
}
.logo-lockup .logo {
  height: 80px;
  flex: 0 1 0px;
}
.logo-lockup .text {
  flex: 1 1 auto;
  line-height: 1;
  font-size: 40px;
  align-self: center;
  border-left: 3px solid #00386b;
  padding-left: 1rem;
  color: #00386b;
}
</style>
