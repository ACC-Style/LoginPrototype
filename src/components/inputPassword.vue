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
        <label for="email" class="value-space cell shrink br_solid br-w_1 p_3 p-b_2 br_secondary-4 texture_light"
             v-bind:class="{'br_alert c_alert': inputState == 'alert','br_warning c_warning': inputState == 'warning'}"
        >
          <i class="fal fa-key"></i>
        </label>
        <div class="input-space cell auto">
            <input
        v-if="!passwordShow"
        class="m-b_0"
        type="password"
        v-model="password"
        placeholder="password"
        required
        v-bind:class="{' br_alert': inputHasError}"
      >
      <input
        v-if="passwordShow"
        class="m-b_0"
        type="text"
        v-model="password"
        placeholder="password"
        required
        v-bind:class="{' br_alert': inputHasError}"
      >
     
		</div>

        <button  v-if="password !=''" type="button" class="c_secondary-4 hover:c_black value-space cell shrink br_solid br-w_1 p_3 p-b_2 br_secondary-4 texture_light" @click="password=''">
          <i class="fas fa-times"></i>
        </button>

        <button
          type="button"  class="value-space cell shrink br_solid br-w_1 p_3 p-b_2 br_secondary-4 texture_light c_secondary-4 hover:c_black"@click="passwordShowToggle"
        >
          <i v-if="passwordShow" class="fas fa-eye"></i>
          <i v-if="!passwordShow" class="fas fa-eye-slash"></i>
        </button>

      </div>
      <div class="message-holder font_n1">
        <div for="email" v-if="inputState=='alert'" v-bind:class="{'bg_alert-n1': inputState == 'alert','bg_warning-n1': inputState == 'warning'}" class=" p_2 c_white">
          <i class="fas fa-fw fa-exclamation-square m-x_2"></i> {{stateMessage}}
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: "inputPassword",
  props: {
	label: { type: String, default: "Password" },
	
  },
  data() {
    return {
      password: "",
	  passwordShow: false,
	  inputHasError:false,
	  inputState:"",
	  stateMessage:''
    };
  },
  methods: {
    passwordShowToggle() {
      this.passwordShow = !this.passwordShow;
    }
  }
};
</script>

<style scoped>
</style>
