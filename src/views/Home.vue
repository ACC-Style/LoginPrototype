<template>
  <div class="home texture_light padding_4" style="height:100vh;">
    <div class="grid-x">
      <div class="cell small-10 medium-8 large-6 margin_auto">
        <div>
          <h1 class="logo-lockup padding-bottom_3"><img src="assets/img/mobileLogo.svg" alt="American College of Cardiology" class="logo"><span class="text">Customer<br>Service Tool</span></h1>
        </div>
        <div class="card shadow_2 cell  ">
          <div class="card-divider color_white font-size_3 padding_4 texture_dust" style="z-index:10" v-bind:class="{'back_alert': pageHasError() , 'back_primary': !pageHasError()}" @click="pageValidation()">
            ACC Staff Login
          </div>
          <div class="card-section">
            <transition name="slideInDown">
              <div v-if="pageHasError()" style="z-index:0" class="back_alert-4 font_0 margin-bottom_0 margin_n4 padding_3">
                <p class="margin-bottom_0"><span class="font_bold">Error Loging In:</span> {{pageError}}</p>
              </div>
            </transition>
            <form class="grid-container">
              <div class="grid-x grid-padding-x padding-top_3">
                <div class="medium-6 cell">
                  <label v-bind:class="{'color_alert': pageHasError()}">Username </label>
                  <div class="input-group margin-bottom_4">
                    <span class="input-group-label padding-left_3 padding-right_3"><i class="fal fa-user"></i></span>
                    <input class="input-group-field" type="text" v-model="username" placeholder="youremail@acc.org" required v-bind:class="{'border_alert': pageHasError()}">
                  </div>
                </div>
                <div class="medium-6 cell">
                  <label v-bind:class="{'color_alert': pageHasError()}">Password  </label>
                  <div class="input-group margin-bottom_4">
                    <span class="input-group-label padding-left_3 padding-right_3"><i class="fal fa-key"></i></span>
                    <input v-if="!passwordShow" class="input-group-field" type="password" v-model="password" placeholder="password" required v-bind:class="{'border_alert': pageHasError()}">
                    <input v-if="passwordShow" class="input-group-field" type="text" v-model="password" placeholder="password" required v-bind:class="{'border_alert': pageHasError()}">
                    <div class="input-group-button" v-if="password !=''">
                      <button type="button" class="button secondaryalt hollow padding-left_3 padding-right_3" @click="password=''"><i class="fas fa-times"></i></button>
                    </div>
                    <div class="input-group-button">
                      <button type="button" class="button secondaryalt hollow padding-left_3 padding-right_3" @click="passwordShowToggle">
                        <i v-if="passwordShow" class="fas fa-eye"></i>
                        <i v-if="!passwordShow" class="fas fa-eye-slash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div class="grid-container">
              <div class="grid-x justify-end">
                <div class="medium-4 cell ">
                  <router-link to="/search" v-bind:class="{disabled: !submitDisabled()}" class="button display-block color_white margin-bottom_0 border_radius expanded">Log In <i class="fal fa-arrow-alt-right"></i></router-link>
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
    name: "home",
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
      },
      passwordShowToggle() {
        this.passwordShow = !this.passwordShow;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .margin-bottom_0 {
    margin-bottom: 0 !important;
  }
  
  .logo-lockup {
    display: flex;
    flex-direction: column;
    @media only screen and (min-width: 500px) {
      flex-direction: row;
    }
  }
  
  .logo-lockup .logo {
    height: 80px;
    flex: 0 1 0px;
  }
  
  .logo-lockup .text {
    flex: 1 1 auto;
    line-height: 1;
    font-size: 40px;
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
    }
  }
</style>
