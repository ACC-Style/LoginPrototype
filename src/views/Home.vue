<template>
	<div class="home texture_light padding_4" style="height:100vh;">
		<div class="grid-x">
			<div class="cell small-10 medium-8 large-6 margin_auto">
				<div class="card shadow_n2 back_alert_2">
					<div class="card-divider back_alert texture_dust color_white font_3">
						Error Loging In. 
					</div>
					<div class="card-section font_1"> <p>Your email and password does not match our records.</p></div>
				</div>
			</div>
		</div>
		<div class="grid-x">
			<div class="cell small-10 medium-8 large-6 margin_auto">
				<div class="card shadow_2 cell  ">
					<div class="card-divider color_white font-size_3 padding_4 texture_dust  back_primary">
						ACC Staff Login
					</div>
					<div class="card-section">
						<form class="grid-container">
						    <div class="grid-x grid-padding-x">
						        <div class="medium-6 cell">
						                <label>Username  <input type="text" v-model="username" placeholder="youremail@acc.org" required></label>
						        </div>
						        <div class="medium-6 cell">
						                <label>Email  <input type="password" v-model="password" placeholder="password" required></label>
						            
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
    	username:'',
    	password:''

    };
	},
	methods:{
		submitDisabled:function(){
			if(this.username != "" && this.password != "" ){
				return true;
			}
			return false;
		}
	}
};
</script>
<style>
</style>
