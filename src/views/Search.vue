<template>
	<div class="search texture_light" style="min-height:100vh;">
		<div class="back_white border_secondary-3 border_solid border-bottom-width_1 padding_3">
			<div class="input-group margin-bottom_0">
				<input class="input-group-field" type="text" v-model="searchTerm">
				<div class="input-group-button">
					<button type="submit" class="button" @click="$emit('search-history',searchTerm)"><i class="fas fa-search"></i></button>
				</div>
			</div>
		</div>
		<searchResult 
			v-for="(member, index) in members" 
			v-bind="member" 
			v-bind:key="index"  
			v-on:open-email-reveal="openEmailReveal(member)"
			v-on:open-username-reveal="openUserNameReveal(member)"
			v-on:open-bruteforce-reveal="openBruteForceLockReveal(member)"

			/>
		<reveal ref="emailReveal">
            <h3 slot="header">Edit Email</h3>
            <div slot="content">
                <div class="">
                    <div class="input-group margin-bottom_4">
                        <span class="input-group-label padding-left_3 padding-right_3"><i class="fas fa-at"></i></span>
                        <input class="input-group-field" type="email" placeholder="youremail@email.com" :value="editEmailAddress">
                        <div class="input-group-button " v-if="editEmailAddress !=''">
                            <button type="submit" class="button secondaryalt hollow padding-left_3 padding-right_3" @click="editEmailAddress=''"><i class="fas fa-times"></i></button>
                        </div>
                        <div class="input-group-button">
                            <button type="submit" class="button" @click="changeEmail(editEmailAddress)">Save</button>
                        </div>
                    </div>
                </div>
                <div class="grid-x border-top-width_1 border_dashed border_primary padding-top_4"> 
                    <div class="cell small-4"><a @click="editEmailAddress = editEmailAddress +'@gmail.com'" class="button small expanded secondaryalt margin-bottom_0"><i class="fal fa-at"></i>gmail.com</a></div>
                    <div class="cell small-4"><a @click="editEmailAddress = editEmailAddress +'@hotmail.com'" class="button small expanded secondaryalt margin-bottom_0"><i class="fal fa-at"></i>hotmail.com</a></div>
                    <div class="cell small-4"><a @click="editEmailAddress = editEmailAddress +'@yahoo.com'" class="button small expanded secondaryalt margin-bottom_0"><i class="fal fa-at"></i>yahoo.com</a></div>
                    <div class="cell small-4"><a @click="editEmailAddress = editEmailAddress +'@mail.com'" class="button small expanded secondaryalt margin-bottom_0"><i class="fal fa-at"></i>mail.com</a></div>
                    <div class="cell small-4"><a @click="editEmailAddress = editEmailAddress +'@outlook.com'" class="button small expanded secondaryalt margin-bottom_0"><i class="fal fa-at"></i>outlook.com</a></div>
                    <div class="cell small-4"><a @click="editEmailAddress = editEmailAddress +'@aol.com'" class="button small expanded secondaryalt margin-bottom_0"><i class="fal fa-at"></i>aol.com</a></div>
                </div>
                <div class=""><div class="padding-top_2"><button class="button secondary expanded small margin-bottom_0" data-close aria-label="Close modal" >Cancel</button></div></div>
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
                            <button type="submit" class="button secondaryalt hollow padding-left_3 padding-right_3" @click="editUserName=''"><i class="fas fa-times"></i></button>
                        </div>
                        <div class="input-group-button">
                            <button type="submit" class="button" @click="changeUserName(editUserName)">Save</button>
                        </div>
                    </div>
                </div>
                <div class="grid-x font_n1"> 
                    <div class="cell shrink margin-left_2"><a @click="editUserName = editUserName +'@gmail.com'" class="link white-space_nowrap margin-bottom_0"><i class="fal fa-at"></i>gmail.com</a></div>
                    <div class="cell shrink margin-left_2"><a @click="editUserName = editUserName +'@hotmail.com'" class="link white-space_nowrap margin-bottom_0"><i class="fal fa-at"></i>hotmail.com</a></div>
                    <div class="cell shrink margin-left_2"><a @click="editUserName = editUserName +'@yahoo.com'" class="link white-space_nowrap margin-bottom_0"><i class="fal fa-at"></i>yahoo.com</a></div>
                    <div class="cell shrink margin-left_2"><a @click="editUserName = editUserName +'@mail.com'" class="link white-space_nowrap margin-bottom_0"><i class="fal fa-at"></i>mail.com</a></div>
                    <div class="cell shrink margin-left_2"><a @click="editUserName = editUserName +'@outlook.com'" class="link white-space_nowrap margin-bottom_0"><i class="fal fa-at"></i>outlook.com</a></div>
                    <div class="cell shrink margin-left_2"><a @click="editUserName = editUserName +'@aol.com'" class="link white-space_nowrap margin-bottom_0"><i class="fal fa-at"></i>aol.com</a></div>
                </div>
                <div class=""><div class="padding-top_2"><button class="button secondary expanded small margin-bottom_0" data-close aria-label="Close modal" >Cancel</button></div></div>
            </div>
        </reveal>
        <reveal ref="bruteForce">
            <h3 slot="header">Unlock User?</h3>
            <div slot="content">
            	<p class="color_primary font_2">{{memberEdit.fullName}}</p>
            	<p class="font_1">Do you want to remove the brute force lock from user?</p>
	            <div class="grid-x grid-center grid-margin-x">
	            	<div class="cell auto"><a @click="removeBruteForceLock()" class="button primary expanded color_whtie">Yes</a></div>
	            	<div class="cell auto"><a href="" class="button secondary expanded hollow" data-close aria-label="Close modal" >No</a></div>
	            </div>
            </div>
        </reveal>
	</div>
</template>

<script>
const searchReturn = [
  {
    fullName: "Mel Colm-Cille Gerard Gibson",
    personifyNumber: "0002124321",
    badgeNumber: 541896,
    emailAddress: "mwatier@acc.org",
    location: "Vienna, USA",
    userName: "Mwatier@acc.org",
    password: "********",
    memberType: "Fellow",
    expoBadge: true,
    children: [
      {
        fullName: "Mel C Gibson",
        personifyNumber: "0012648325",
        emailAddress: "mb@abc.com",
        location: "Vienna, USA",
        userName: "mb@abc.com",
        password: "********",
        memberType: "",
        expoBadge: true
      },
      {
        fullName: "Mel C G Gibson",
        personifyNumber: "0012648325",
        emailAddress: "",
        location: "Vienna, USA",
        userName: "mb@abc.com",
        password: "********",
        memberType: "",
        expoBadge: true,
        bruteForceLock: true
      }
    ]
  },
  {
    fullName: "Julia Scarlett Elizabeth Louis-Dreyfus",
    personifyNumber: "00012344321",
    emailAddress: "Julia@acc.org",
    location: "Arlington, USA",
    userName: "Julia@aol.com",
    password: "********",
    memberType: "NPI"
  },
  {
    fullName: "Morena Silva de Vaz Setta Baccarin",
    personifyNumber: "000234193",
    badgeNumber: undefined,
    emailAddress: "Morena@acc.org",
    location: "Distric of Columbia, USA",
    userName: "Morena@gmail.org",
    password: "********",
    iscienceBadge: 52143,
    bruteForceLock: true
  }
];
import searchResult from "@/components/searchResult.vue";
import Reveal from "@/components/Reveal.vue";
export default {
  name: "Search",
  components: {
    searchResult,
    Reveal
  },
  methods: {
    openEmailReveal: function(member) {
      console.log("parent has heard the emit");
      this.setMemberEdit(member);
      this.$refs.emailReveal.openReveal();
    },
    changeEmail: function(val) {
      this.memberEdit.emailAddress = val;
      this.replaceMemberData();
      this.$refs.emailReveal.closeReveal();
    },
    openUserNameReveal: function(member) {
      console.log("parent has heard the emit User Name Reveal");
      this.setMemberEdit(member);
      this.$refs.userName.openReveal();
    },
    changeUserName: function(val) {
      this.memberEdit.userName = val;
      this.replaceMemberData();
      this.$refs.emailReveal.closeReveal();
    },
    openBruteForceLockReveal(member){
		console.log("parent has heard the emit User Name Reveal");
      this.setMemberEdit(member);
      this.$refs.bruteForce.openReveal();
    },
    removeBruteForceLock(){
		this.memberEdit.bruteForceLock = false;
		this.replaceMemberData();
		this.$refs.bruteForce.closeReveal();
    },
    setMemberEdit: function(member){
    	this.memberEdit = member;
    	this.editUserName = member.userName;
    	this.editPassword = member.userName;
    	this.editEmailAddress = member.emailAddress;
    },
    replaceMemberData: function(){
    	var index = this.members.indexOf(this.memberEdit);
		if (index !== -1) {
			this.members[index] = this.memberEdit;
		}
    }
  },
  data() {
    return {
      editEmailAddress: "",
      editUserName: "",
      editPassword: "",
      memberEdit: {},
      members: searchReturn,
      searchTerm:""
    };
  }
};
</script>
<style lang="css" scoped>
.white-space_nowrap{white-space: nowrap;}
.link:hover{text-decoration: underline;}
</style>
