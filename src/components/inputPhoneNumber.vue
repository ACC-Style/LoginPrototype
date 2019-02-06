<template>
	<div id="inputEmail" class="question">
		<label
			for="email"
			v-bind:class="{'c_alert': inputState == 'alert','c_warning': inputState == 'warning'}"
			class="label-holder grid-x font_1 font_bold"
		>
			<span class="text cell shrink">{{ label }}</span>
			<span v-if="required" class="required-holder cell shrink">
				<i class="fas fa-asterisk c_warning font_n3 vertical-align_top"></i>
			</span>
		</label>
		<div class="input-holder grid-x">
			<valueIcon :icon="'fa-key'" :inputState="inputState"></valueIcon>
			<div class="input-space cell auto">
				<input
					v-if="!phoneShow"
					class="m-b_0"
					type="phone"
					v-model="phone"
					placeholder="phone"
					required
					v-bind:class="{
						'br_alert-n1': inputState == 'alert',
						'br_warning-n1': inputState == 'warning',
						'br_info-n1': inputState == 'info',
						'br_success-n2': inputState == 'success'
                        }"
					@change="onChange(phone)"
				>
				<input
					v-if="phoneShow"
					class="m-b_0"
					type="text"
					v-model="phone"
					placeholder="phone"
					required
					v-bind:class="{
						'br_alert-n1': inputState == 'alert',
						'br_warning-n1': inputState == 'warning',
						'br_info-n1': inputState == 'info',
						'br_success-n1': inputState == 'success'
                        }"
					@change="onChange(phone)"
				>
			</div>

			<button
				v-if="phone !=''"
				type="button"
				class="c_secondary-4 hover:c_black value-space cell shrink br_solid br-w_1 p_3 p-b_2 br_secondary-4 texture_light"
				@click="resetphone"
			>
				<i class="fas fa-times"></i>
			</button>
			
			<button
				type="button"
				class="value-space cell shrink br_solid br-w_1 p_3 p-b_2 br_secondary-4 texture_light c_secondary-4 hover:c_black"
				@click="phoneShowToggle"
			>
				<i v-if="phoneShow" class="fas fa-eye"></i>
				<i v-if="!phoneShow" class="fas fa-eye-slash"></i>
			</button>
		</div>
		<messageHolder v-bind:inputState="inputState" v-bind:stateMessage="stateMessage"></messageHolder>
	</div>
</template>
<script>
import messageHolder from "@/components/subComponents/inputMessageHolder.vue";
import valueIcon from "@/components/subComponents/inputValueIcon.vue";
export default {
	name: "inputPhoneNumber",
	props: {
		label: { type: String, default: "Phone Number" },
		value: { type: String, default: "" },
		required: { type: Boolean, default: "true" },
		pageHasError: { type: Boolean, default: false }
	},
	components: {
		messageHolder,
		valueIcon
	},
	data() {
		return {
			phone: this.value,
			phoneShow: false,
			inputHasError: false,
			inputState: "",
			stateMessage: ""
		};
	},
	methods: {
		clearInput() {
			this.phone = "";
			this.onChange(this.phone);
		},
		validate(value) {
			var valid = true,
				phoneLength = 10;
			if (value.length <= phoneLength) {
				this.inputState = "alert";
				this.stateMessage = "phone is too short";
				valid = false;
			}
			return valid;
		},
		onChange(value) {
			// write any logic around how this should be protected, escaped, validated.
			if (value == "") {
				this.inputState = "";
				this.stateMessage = "";
				emitvalue = "";
			}
			if (validate(value)) {
				this.$emit("update:phone", emitvalue);
			}
		}
	}
};
</script>

<style scoped>
</style>
