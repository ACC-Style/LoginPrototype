<template>
	<div
		class="message-holder font_n1 br_solid br_0"
		v-bind:class="{
            'br_0': inputState != '',
            'br_alert-n1 c_alert-n1 br_0 br-t_3': inputState == 'alert', 
            'bg_warning-n1 c_warning-n1 br_0 br-t_3': inputState == 'warning',
            'bg_info-n1 c_info-n1 br_0 br-t_3': inputState == 'info',
            'bg_success-n1 c_success-n1 br_0 br-t_3': inputState == 'success'
            }"
	>
		<div
			class="p_2 font_bold"
			v-if="inputState != ''"
			v-bind:class="{
                    'c_alert-n1': inputState == 'alert',
                    'c_warning-n1': inputState == 'warning',
                    'c_info-n1': inputState == 'info',
                    'c_success-n1': inputState == 'success'
                        }"
		>
			<i
				class="fas fa-fw m-x_2"
				v-bind:class="{
						'fa-exclamation-square': inputState == 'alert',
						'fa-exclamation-triangle': inputState == 'warning',
						'fa-lightbulb-exclamation': inputState == 'info',
						'fa-check-square': inputState == 'success'
						}"
			></i>
			{{stateMessage}}
		</div>
	</div>
</template>

<script>
export default {
	name: "inputMessageHolder",
	props: {
		stateMessage: "",
		inputState: ""
	}
};
</script>

<style scoped>
.message-holder {
	transition: border-width 0.1s linear;
}
</style>