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
          <i class="fal fa-user"></i>
        </label>
        <div class="input-space cell auto">
            <input
              id="email"
              v-on:change="onChange(username)"
              class="input-group-field"
              type="text"
              v-model="username"
              placeholder="youremail@acc.org"
              required
              v-bind:class="{' br_alert': inputState == 'alert'}"
            >
        </div>
      </div>
      <div class="message-holder font_n1"  v-bind:class="{'br_0 br-t_3 br_solid': inputState != '','br_alert-n1 c_alert-n1': inputState == 'alert','bg_warning-n1 c_warning-n1': inputState == 'warning'}" >
        <div for="email" v-if="inputState=='alert'" class="p_2">
          <i class="fas fa-fw fa-exclamation-square m-x_2"></i> {{stateMessage}}
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "inputEmail",
  props: {
    label: { type: String, default: "UserName" },
    required: { type: Boolean, default: "true" },
    pageHasError: { type: Boolean, default: false }
  },
  data() {
    return {
      username: "",
      inputState: "",
      stateMessage: ""
    };
  },
  methods: {
    onChange: function(value) {
        console.log(value);
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
            this.inputState = "";
            this.$emit("usernameUpdate", value);
        } else {
            this.inputState = "alert";
            this.stateMessage = "Not an email.";
        }
    },
  }
};
</script>

<style scoped>
</style>