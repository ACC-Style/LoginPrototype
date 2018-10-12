<template>
	<div class="home texture_light padding_4" style="height:100vh;">
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
						                <label>Name  <input type="text" required></label>
						        </div>
						        <div class="medium-6 cell">
						                <label>Email  <input type="password" required></label>
						            
						        </div>
						    </div>
						</form>
						<div class="grid-container">
							<div class="grid-x justify-end">
								<div class="medium-4 cell ">
<router-link to="/search"  class="button disabled display-block color_white margin-bottom_0 border_radius expanded">Log In <i class="fal fa-arrow-alt-right"></i></router-link>
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
  name: "home"
};
</script>
<style>
</style>
