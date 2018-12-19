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
					v-if="!passwordShow"
					class="m-b_0"
					type="password"
					v-model="password"
					placeholder="password"
					required
					v-bind:class="{
						'br_alert-n1': inputState == 'alert',
						'br_warning-n1': inputState == 'warning',
						'br_info-n1': inputState == 'info',
						'br_success-n1': inputState == 'success'
                        }"
					@change="onChange(password)"
				>
				<input
					v-if="passwordShow"
					class="m-b_0"
					type="text"
					v-model="password"
					placeholder="password"
					required
					v-bind:class="{
						'br_alert-n1': inputState == 'alert',
						'br_warning-n1': inputState == 'warning',
						'br_info-n1': inputState == 'info',
						'br_success-n1': inputState == 'success'
                        }"
					@change="onChange(password)"
				>
			</div>

			<button
				v-if="password !=''"
				type="button"
				class="c_secondary-4 hover:c_black value-space cell shrink br_solid br-w_1 p_3 p-b_2 br_secondary-4 texture_light"
				@click="resetPassword"
			>
				<i class="fas fa-times"></i>
			</button>
			
			<button
				type="button"
				class="value-space cell shrink br_solid br-w_1 p_3 p-b_2 br_secondary-4 texture_light c_secondary-4 hover:c_black"
				@click="passwordShowToggle"
			>
				<i v-if="passwordShow" class="fas fa-eye"></i>
				<i v-if="!passwordShow" class="fas fa-eye-slash"></i>
			</button>
		</div>
		<messageHolder v-bind:inputState="inputState" v-bind:stateMessage="stateMessage"></messageHolder>
	</div>
</template>
<script>
import messageHolder from "@/components/subComponents/inputMessageHolder.vue";
import valueIcon from "@/components/subComponents/inputValueIcon.vue";
export default {
	name: "inputPassword",
	props: {
		label: { type: String, default: "Password" },
		required: { type: Boolean, default: "true" },
		pageHasError: { type: Boolean, default: false }
	},
	components: {
		messageHolder,
		valueIcon
	},
	data() {
		return {
			password: "",
			passwordShow: false,
			inputHasError: false,
			inputState: "",
			stateMessage: ""
		};
	},
	methods: {
		passwordShowToggle() {
			this.passwordShow = !this.passwordShow;
		},
		resetPassword() {
			this.password = "";
			this.onChange(this.password);
		},
		onChange(value) {
			// write any logic around how this should be protected, escaped, validated.
			var emitvalue = "",
				passwordLength = 5;

			if (value.length > passwordLength) {
				this.inputState = "";
				this.stateMessage = "";
				emitvalue = value;
			}
			if (value.length <= passwordLength) {
				this.inputState = "alert";
				this.stateMessage = "Password is too short";
				emitvalue = "";
			}
			if (value == "") {
				this.inputState = "";
				this.stateMessage = "";
				emitvalue = "";
			}
			this.$emit("update:password", emitvalue);
		}
	}
};
</script>

<style scoped>
</style>
