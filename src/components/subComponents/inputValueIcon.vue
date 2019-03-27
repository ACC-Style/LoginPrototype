<template>
	<label
		class="value-space cell shrink br_solid br-w_1 p_3 p-b_2 texture_light"
		v-bind:class="{
            'bg_secondary-4 br_secondary-3 c_secondary-2': inputState == '',
            'bg_alert-4 br_alert c_alert': inputState == 'alert',
            'bg_warning-4 br_warning c_warning': inputState == 'warning',
            'bg_info-4 br_info c_info': inputState == 'info',
            'bg_sucess-4 br_sucess c_sucess': inputState == 'sucess'
            }"
	>
		<i class="fal" v-bind:class="icon"></i>
	</label>
</template>

<script>
export default {
	name: "valueIcon",
	props: {
		inputState: { type: String, default: "" },
		icon: { type: String, default: "fa-check" }
	}
};
</script>
