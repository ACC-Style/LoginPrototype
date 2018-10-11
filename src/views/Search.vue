<template>
    <div class="search texture_light" style="min-height:100vh;">
        <div class="back_white border_secondary-3 border_solid border-bottom-width_1 padding_3">
            <div class="input-group margin-bottom_0">
                <input class="input-group-field" type="text">
                <div class="input-group-button">
                    <button type="submit" class="button"><i class="fas fa-search"></i></button>
                </div>
            </div>
        </div>
        <searchResult v-for="member in members" v-bind="member"/>

    </div>
</template>


<script>
import searchResult from "@/components/searchResult.vue";
export default {
  name: "Search",
  components: {
    searchResult
  },

  data() {
    return {
    	members:[{
    	fullName:"Mel Colm-Cille Gerard Gibson",
    	personifyNumber:"0002124321",
    	badgeNumber:"541896",
    	email:"mwatier@acc.org",
    	location: "Vienna, USA",
    	userName: "Mwatier@acc.org",
    	password:"********",
    	memberType:"Fellow",
    	},{
    	fullName:"Julia Scarlett Elizabeth Louis-Dreyfus",
    	personifyNumber:"00012344321",
    	badgeNumber:"",
    	email:"mwatier@acc.org",
    	location: "Arlington, USA",
    	userName: "Mwatier@acc.org",
    	password:"********",
    	memberType:"Fellow",
    	},{
    	fullName:"Morena Silva de Vaz Setta Baccarin",
    	personifyNumber:"000234193",
    	badgeNumber:"541896",
    	email:"mwatier@acc.org",
    	location: "Distric of Columbia, USA",
    	userName: "Mwatier@acc.org",
    	password:"********",
    	memberType:"Fellow",
    	}]
    };
  }
};
</script>

<style lang="css" scoped>
</style>
