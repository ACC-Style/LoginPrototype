<template>
  <div class="home texture_light p_4" style="height:100vh;">
    <div class="grid-x">
      <div class="cell small-10 medium-10  large-8 m_auto">
        <div>
          <h1 class="logo-lockup p-b_3 "><img src="assets/img/mobileLogo.svg" alt="American College of Cardiology" class="logo p-r_3"><span class="text">Customer&nbsp;<br class="show-for-medium">Service Tool</span></h1>
        </div>
        <div class="card shadow_2 cell  ">
          <div class="card-divider color_white font-size_3 p_4 texture_dust" style="z-index:10" v-bind:class="{'bg_alert': pageHasError() , 'bg_primary': !pageHasError()}" @click="pageValidation()">
            ACC Staff Login
          </div>
          <div class="card-section">
            <transition name="slideInDown">
              <div v-if="pageHasError()" style="z-index:0" class="bg_alert-4 font_0 m-b_0 m_n4 p_3">
                <p class="m-b_0"><span class="font_bold">Error Loging In:</span> {{pageError}}</p>
              </div>
            </transition>
            <form class="grid-container">
              <div class="grid-x grid-padding-x p-y_3">
                <div class="medium-6 cell">
                  <inputUsername :label="'Username'" :required="true" :pageHasError="pageHasError()"></inputUsername>
                </div>
                <div class="medium-6 cell">
                  <inputPassword :label="'Password'"  :pageHasError="pageHasError()"></inputPassword>
                  </div>

                
              </div>
            </form>
            <div class="grid-container">
              <div class="grid-x justify-end">
                <div class="medium-4 cell ">
                  <router-link to="/search" v-bind:class="{disabled: !submitDisabled()}" class="button display-block color_white m-b_0  br_radius expanded">Log In <i class="fal fa-arrow-alt-r"></i></router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="p_3 font_n1 text-center">
        	<router-link class="link secondary text_underline" to="/about"><i class="fas fa-info-square"></i> About this utility</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import inputPassword from "@/components/inputPassword.vue";
import inputUsername from "@/components/inputUsername.vue";

export default {
  name: "login",
    components: {
      inputPassword,
      inputUsername
    },
  data() {
    return {
      username: "",
      password: "",
      pageError: "",
      passwordShow: false
    };
  },
  methods: {
    submitDisabled: function() {
      if (this.username != "" && this.password != "") {
        return true;
      }
      return false;
    },
    pageHasError: function() {
      if (this.pageError != "") {
        return true;
      }
      return false;
    },
    pageValidation() {
      if (this.pageError == "") {
        this.pageError = "Your email and password does not match our records.";
      } else {
        this.pageError = "";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.logo-lockup {
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 500px) {
    flex-direction: row;
  }
}

.logo-lockup .logo {
  height: 40px;
  flex: 0 1 0px;
  margin-bottom:.5rem;
   @media only screen and (min-width: 500px) { height: 80px;}
}

.logo-lockup .text {
  flex: 1 1 auto;
  line-height: 1;
  font-size: 24px;
  align-self: center;
  border-top: 3px solid #00386b;
  padding-top: 1rem;
  text-align: center;
  color: #00386b;
  @media only screen and (min-width: 500px) {
    border-left: 3px solid #00386b;
    padding-left: 1rem;
    text-align: left;
    padding-top: 0;
    border-top: 0 none;
    font-size: 40px;
  }
}
</style>
