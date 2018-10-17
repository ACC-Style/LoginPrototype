import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchHistory: [],
    share: [],
    singleReturn: [
      {
        fullName: "Julia Scarlett Elizabeth Louis-Dreyfus",
        personifyNumber: "00012344321",
        emailAddress: "Julia@acc.org",
        location: "Arlington, USA",
        userName: "Julia@aol.com",
        password: "********",
        memberType: "NPI"
      }
    ],
    searchReturn: [
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
    ]
  },
  mutations: {
    ADD_SEARCH_HISTORY: function(state, result) {
      if (state.searchHistory.indexOf(result) === -1) {
        state.searchHistory.unshift(result);
        console.log(result + " was added from VUEX");
      } else {
        console.log(result + " is a repeat from VUEX");
      }
      state.searchHistory = state.searchHistory.slice(
        0,
        Math.max(15, state.searchHistory.length - 1)
      );
    }
  },
  getters: {
    searchHistoryCount: function(state) {
      return state.searchHistory.length;
    }
  },
  actions: {}
});
