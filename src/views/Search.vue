<template>
  <div class="search texture_light" style="min-height:100vh;">
    <transition name="slideInDown">
      <div v-if="hasPageMessage" style="z-index=0" v-bind:class="{'back_alert':pageMessageType=='error','back_success':pageMessageType=='success','back_info':pageMessageType=='message'}" class=" font_0 margin-bottom_0 padding_3">
        <p class="margin-bottom_0 color_white"><span class="font_bold">{{pageMessageType.toUpperCase()}}:</span> {{pageMessage}}</p>
      </div>
    </transition>
    <div class="back_white border_secondary-3 border_solid border-bottom-width_1 padding_3" style="z-index=1;">
      <form @submit.prevent="runSearch">
        <div class="input-group margin-bottom_0">
          <input class="input-group-field" type="text" v-model="searchTerm" placeholder="Search via Name, email, badge...">
          <div class="input-group-button">
            <button type="submit" class="button"><i class="fas fa-search"></i></button>
          </div>
        </div>
      </form>
    </div>
    <searchResult v-for="(member, index) in searchReturn" v-bind="member" v-bind:key="index" v-on:open-email-reveal="openEmailReveal(member)"
      v-on:open-username-reveal="openUserNameReveal(member)" v-on:open-bruteforce-reveal="openBruteForceLockReveal(member)"
      v-on:open-password-reveal="openPasswordReveal(member)" v-on:share-record="setSharedRecord(member)" />
    <reveal ref="emailReveal">
      <h3 slot="header">Edit Email</h3>
      <div slot="content">
        <div class="">
          <div class="input-group margin-bottom_4">
            <span class="input-group-label padding-left_3 padding-right_3"><i class="fas fa-at"></i></span>
            <input class="input-group-field" type="email" placeholder="youremail@email.com" :value="editEmailAddress">
            <div class="input-group-button " v-if="editEmailAddress !=''">
              <button type="submit" class="button secondaryalt hollow padding-left_3 padding-right_3" @click="editEmailAddress=''"><i
                  class="fas fa-times"></i></button>
            </div>
            <div class="input-group-button">
              <button type="submit" class="button" v-bind:disabled="editEmailAddress==''" @click="changeEmail(editEmailAddress)">Save</button>
            </div>
          </div>
        </div>
        <div class="grid-x border-top-width_1 border_dashed border_primary padding-top_4">
          <div class="cell small-4"><a @click="editEmailAddress = editEmailAddress +'@gmail.com'" class="button small expanded secondaryalt margin-bottom_0"><i
                class="fal fa-at"></i>gmail.com</a></div>
          <div class="cell small-4"><a @click="editEmailAddress = editEmailAddress +'@hotmail.com'" class="button small expanded secondaryalt margin-bottom_0"><i
                class="fal fa-at"></i>hotmail.com</a></div>
          <div class="cell small-4"><a @click="editEmailAddress = editEmailAddress +'@yahoo.com'" class="button small expanded secondaryalt margin-bottom_0"><i
                class="fal fa-at"></i>yahoo.com</a></div>
          <div class="cell small-4"><a @click="editEmailAddress = editEmailAddress +'@mail.com'" class="button small expanded secondaryalt margin-bottom_0"><i
                class="fal fa-at"></i>mail.com</a></div>
          <div class="cell small-4"><a @click="editEmailAddress = editEmailAddress +'@outlook.com'" class="button small expanded secondaryalt margin-bottom_0"><i
                class="fal fa-at"></i>outlook.com</a></div>
          <div class="cell small-4"><a @click="editEmailAddress = editEmailAddress +'@aol.com'" class="button small expanded secondaryalt margin-bottom_0"><i
                class="fal fa-at"></i>aol.com</a></div>
        </div>
        <div class="">
          <div class="padding-top_2"><button class="button secondary expanded small margin-bottom_0" data-close
              aria-label="Close modal">Cancel</button></div>
        </div>
      </div>
    </reveal>
    <reveal ref="userName">
      <h3 slot="header">Edit UserName</h3>
      <div slot="content">
        <div class="">
          <div class="input-group margin-bottom_4">
            <span class="input-group-label padding-left_3 padding-right_3"><i class="fal fa-user-circle"></i></span>
            <input class="input-group-field" type="email" placeholder="youremail@email.com" :value="editUserName">
            <div class="input-group-button" v-if="editUserName !=''">
              <button type="submit" class="button secondaryalt hollow padding-left_3 padding-right_3" @click="editUserName=''"><i
                  class="fas fa-times"></i></button>
            </div>
            <div class="input-group-button">
              <button type="submit" class="button" v-bind:disabled="editUserName==''" @click="changeUserName(editUserName)">Save</button>
            </div>
          </div>
        </div>
        <div class="grid-x border-top-width_1 border_dashed border_primary padding-top_4">
          <div class="cell small-4"><a @click="editUserName = editUserName +'@gmail.com'" class="button small expanded secondaryalt margin-bottom_0"><i
                class="fal fa-at"></i>gmail.com</a></div>
          <div class="cell small-4"><a @click="editUserName = editUserName +'@hotmail.com'" class="button small expanded secondaryalt margin-bottom_0"><i
                class="fal fa-at"></i>hotmail.com</a></div>
          <div class="cell small-4"><a @click="editUserName = editUserName +'@yahoo.com'" class="button small expanded secondaryalt margin-bottom_0"><i
                class="fal fa-at"></i>yahoo.com</a></div>
          <div class="cell small-4"><a @click="editUserName = editUserName +'@mail.com'" class="button small expanded secondaryalt margin-bottom_0"><i
                class="fal fa-at"></i>mail.com</a></div>
          <div class="cell small-4"><a @click="editUserName = editUserName +'@outlook.com'" class="button small expanded secondaryalt margin-bottom_0"><i
                class="fal fa-at"></i>outlook.com</a></div>
          <div class="cell small-4"><a @click="editUserName = editUserName +'@aol.com'" class="button small expanded secondaryalt margin-bottom_0"><i
                class="fal fa-at"></i>aol.com</a></div>
        </div>
        <div class="">
          <div class="padding-top_2"><button class="button secondary expanded small margin-bottom_0" data-close
              aria-label="Close modal">Cancel</button></div>
        </div>
      </div>
    </reveal>
    <reveal ref="bruteForce">
      <h3 slot="header">Unlock User?</h3>
      <div slot="content">
        <p class="color_primary font_2">{{memberEdit.fullName}}</p>
        <p class="font_1">Do you want to remove the brute force lock from user?</p>
        <div class="grid-x grid-center grid-margin-x">
          <div class="cell auto"><a @click="removeBruteForceLock()" class="button primary expanded color_whtie">Yes</a></div>
          <div class="cell auto"><a href="" class="button secondary expanded hollow" data-close aria-label="Close modal">No</a></div>
        </div>
      </div>
    </reveal>
    <reveal ref="password">
      <h3 slot="header">Change Password</h3>
      <div slot="content">
        <div class="">
          <div class="input-group margin-bottom_4">
            <span class="input-group-label padding-left_3 padding-right_3"><i class="fal fa-key"></i></span>
            <input class="input-group-field" type="text" placeholder="8 characters with numbers" v-model="editPassword">
            <div class="input-group-button" v-if="editPassword !=''">
              <button class="button secondaryalt hollow padding-left_3 padding-right_3" @click="editPassword=''"><i
                  class="fas fa-times"></i></button>
            </div>
            <div class="input-group-button">
              <button class="button secondaryalt hollow padding-left_3 padding-right_3" @click="generatePassword"><i
                  class="fas fa-cogs"></i></button>
            </div>

          </div>
        </div>

        <div class="grid-x grid-center grid-margin-x">
          <div class="cell auto"><a @click="saveChangedPassword(editPassword)" v-bind:disabled="editPassword==''" class="button primary expanded color_whtie">Save</a></div>
          <div class="cell auto"><a href="" class="button secondary expanded hollow" data-close aria-label="Close modal">Cancel</a></div>
        </div>
      </div>
    </reveal>
  </div>
</template>

<script>
  import searchResult from "@/components/searchResult.vue";
  import reveal from "@/components/Reveal.vue";
  import {
    mapState,
    mapMutations,
    mapActions
  } from "vuex";

  export default {
    name: "Search",
    components: {
      searchResult,
      reveal
    },
    computed: {
      ...mapState(["search", "share", "searchReturn", "passwordPart1", "passwordPart2", "passwordPart3"])
    },
    methods: {
      ...mapMutations(["ADD_SEARCH_HISTORY", "REPLACE_MEMBER_DATA", "SET_SINGLE_RESULT"]),
      ...mapActions(["replaceMemberData"]),
      runSearch: function () {
        let result = Object({
          searchTerm: this.searchTerm.toLowerCase(),
          resultCount: parseInt(Math.random() * 100)
        });
        this.ADD_SEARCH_HISTORY(result);
        this.searchTerm = "";
      },
      openEmailReveal: function (member) {
        this.setMemberEdit(member);
        this.$refs.emailReveal.openReveal();
      },
      changeEmail: function (val) {
        this.memberEdit.emailAddress = val;
        this.REPLACE_MEMBER_DATA(this.memberEdit);
        this.firePageMessage('success',"Email of " +this.memberEdit.fullName + "has been saved");

        this.$refs.emailReveal.closeReveal();
      },
      openUserNameReveal: function (member) {
        this.setMemberEdit(member);
        this.$refs.userName.openReveal();
      },
      openPasswordReveal: function (member) {
        this.setMemberEdit(member);
        this.$refs.password.openReveal();
      },
      generatePassword: function () {
        this.editPassword = this.passwordPart1[this.randomNumber(25) - 1] + this.passwordPart2[this.randomNumber(25) -
          1] + this.passwordPart3[this.randomNumber(25) - 1]
      },
      randomNumber: function (val) {
        return parseInt(Math.random() * val);
      },
      changeUserName: function (val) {
        this.memberEdit.userName = val;
        this.replaceMemberData(this.memberEdit);
        this.firePageMessage('success',"UserName of " +this.memberEdit.fullName + "has been saved");
        this.$refs.userName.closeReveal();
      },
      openBruteForceLockReveal: function (member) {
        this.setMemberEdit(member);
        this.$refs.bruteForce.openReveal();
      },
      removeBruteForceLock: function () {
        this.memberEdit.bruteForceLock = false;
        this.REPLACE_MEMBER_DATA(this.memberEdit);
        this.$refs.bruteForce.closeReveal();
        this.firePageMessage('success',"Brute force lockout has been removed from the account of " + this.memberEdit.fullName);
        
      },
      saveChangedPassword: function (val) {
        this.memberEdit.password = val;
        this.REPLACE_MEMBER_DATA(this.memberEdit);
        this.$refs.password.closeReveal();
      },
      setMemberEdit: function (member) {
        this.memberEdit = member;
        this.editUserName = member.userName;
        this.editPassword = member.password;
        this.editEmailAddress = member.emailAddress;
      },
      setSharedRecord: function (member) {
        this.SET_SINGLE_RESULT(member);
        this.firePageMessage('message',"Member Number " + member.personifyNumber + " has been shared.");

      },
      clearPageMessge: function(){
          this.hasPageMessage = false;
          this.pageMessageType = 'message';
          this.pageMessage = '';
      },
      firePageMessage: function(type,text){
        this.hasPageMessage = true;
        this.pageMessageType = type;
        this.pageMessage = text;
        setTimeout(this.clearPageMessge, 3000);
      }
    },
    data() {
      return {
        editEmailAddress: "",
        editUserName: "",
        editPassword: "",
        memberEdit: {},
        searchTerm: this.$route.query.q,
        hasPageMessage:false,
        pageMessageType:'message',
        pageMessage:'',
      };
    }
  };
</script>
<style lang="css" scoped>
  .white-space_nowrap {
    white-space: nowrap;
  }

  .link:hover {
    text-decoration: underline;
  }
</style>