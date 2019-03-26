<template>
	<div id="accessCode" class="question">
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
			<valueIcon :icon="'fa-phone'" :inputState="inputState"></valueIcon>
			<div class="input-space cell auto">
				<input
					id="nubmer"
					type="number"
					@change="onChange(accessCode)"
					class="input-group-field"
					v-model="accessCode"
					placeholder="Access Code"
					required
					v-bind:class="{
						'br_alert-n1': inputState == 'alert',
						'br_warning-n1': inputState == 'warning',
						'br_info-n1': inputState == 'info',
						'br_success-n1': inputState == 'success'
          }"
				>
			</div>
		</div>
		<messageHolder v-bind:inputState="inputState" v-bind:stateMessage="stateMessage"></messageHolder>
	</div>
</template>

<script>
import messageHolder from "@/components/subComponents/inputMessageHolder.vue";
import valueIcon from "@/components/subComponents/inputValueIcon.vue";

export default {
	name: "accessCode",
	props: {
		label: { type: String, default: "Access Code" },
		value: { type: String, default: "" },
		required: { type: Boolean, default: "true" },
		pageHasError: { type: Boolean, default: false }
	},
	data() {
		return {
			accessCode: this.value,
			inputState: "",
			stateMessage: ""
		};
	},
	components: {
		messageHolder,
		valueIcon
	},
	methods: {
		onChange: function(pin) {
			if (pin.toString().length === 6) {
				this.inputState = "";
				this.$emit("update:accessCode", pin);
				return true;
			} else {
				this.inputState = "alert";
				this.stateMessage = "Access codes are six numbers long.";
				this.$emit("update:accessCode", "");
				return false;
			}
		}
	}
};
</script>

<style scoped>
</style>