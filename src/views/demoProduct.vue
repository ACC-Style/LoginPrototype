<template>
	<div
		class="absolute bg_secondary-0 br-t_3 br_acc br_solid l_0 r_0 shadow_n2 texture-light texture_light"
	>
		<div class="grid-x p_4 m_auto" style="max-width:1200px;">
			<div class="cell small-12 m-b_4">
				<div class="font_2 card shadow_3 bg_white br_black-4">
					<div class="card-section p_0 m-r_n1">
						<div class="grid-x m-r_1">
							<div class="cell small-12 medium-7 bg_primary p_5 font_1 font_2:md c_white lh_1">
								<div class="font-golden_1 font_light font_display lh_1">Welcome</div>
								<div
									class="font-golden_2 font-bold font-display lh_2 uppercase"
								>to the American College of Cardiology.</div>
							</div>
							<div class="cell small-12 medium-5 flex flex_column:md font_n2 font_1:lg">
								<div class="cell shrink"></div>
								<div
									class="font-golden_1 relative cell auto p_4 h:bg_acc-n3 c_white bg_accent relative overflow_hidden"
								>
									My Profile
									<i class="absolute b_4 fa-user fas font-golden_2 opacity_2 r_4"></i>
								</div>
								<div
									class="font-golden_1 relative cell p_4 auto h:bg_acc-n3 c_white bg_info overflow_hidden"
								>
									Physician Dashboard
									<i class="absolute b_4 fa-chart-bar fas font-golden_2 opacity_2 r_4"></i>
								</div>
								<div
									class="font-golden_1 relative cell p_4 auto h:bg_acc-n3 c_white bg_highlight overflow_hidden"
								>
									Commitee Nominations
									<i class="absolute b_4 fa-trophy-alt fas font-golden_2 opacity_2 r_4"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="card bg_white br_secondary-3 br_solid br-b-width_1 p_3 p-t_0 shadow_3">
					<div class="card-section p-t_0">
						<div class style="z-index=1;">
							<form>
								<label class="font_slab c_acc text-center font_4" for="searchbar">Ask ACC</label>
								<p class="text-center">Search article or information accross all products of the ACC.</p>
								<div class="input-group m-b_0">
									<input
										name="searchbar"
										class="input-group-field shadow_n2 bg_secondary-5 c_black br_radius"
										type="text"
										placeholder
									>
									<div class="input-group-button">
										<button type="submit" class="button">
											<i class="fas fa-search"></i>
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="grid-x grid-margin-x grid-margin-y font_2 p_4 m_auto" style="max-width:1200px;">
			<div class="cell small-12 medium-4 large-6 card shadow_2">
				<div class="card-section font-golden_1 font_bold">ACC</div>
			</div>
			<div class="cell small-12 medium-4 large-6 card shadow_2">
				<div class="card-section font-golden_1 font_bold">CVQuality</div>
			</div>
			<div class="cell small-12 medium-4 large-6 card shadow_2">
				<div class="card-section font-golden_1 font_bold">ACCRED</div>
			</div>
			<div class="cell small-12 medium-4 large-6 card shadow_2">
				<div class="card-section font-golden_1 font_bold">NCDR</div>
			</div>
			<div class="cell small-12 medium-4 large-6 card shadow_2">
				<div class="card-section font-golden_1 font_bold">MED AXIOM</div>
			</div>
		</div>
	</div>
</template>

