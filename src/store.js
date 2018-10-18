import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    adminUserName:"Simon Pegg",
    searchHistory: [],
    shares: [],
    singleReturn: [
      {
        fullName: "Julia Scarlett Elizabeth Louis-Dreyfus",
        personifyNumber: "00012344321",
        emailAddress: "Julia@acc.org",
        location: "Arlington, USA",
        userName: "Julia@aol.com",
        password: "",
        memberType: "NPI"
      }
    ],
    searchReturn: [
      {
        fullName: "Mel Colm-Cille Gerard Gibson",
        personifyNumber: "0002124321",
        badgeNumber: 541896,
        emailAddress: "TheMel@gmail.com",
        location: "Vienna, USA",
        userName: "MeGibson",
        password: "",
        memberType: "Fellow",
        expoBadge: true,
        children: [
          {
            fullName: "Mel C Gibson",
            personifyNumber: "0012648325",
            emailAddress: "mb@abc.com",
            location: "Vienna, USA",
            userName: "mb@abc.com",
            password: "",
            memberType: "",
            expoBadge: true
          },
          {
            fullName: "Mel C G Gibson",
            personifyNumber: "0012648325",
            emailAddress: "",
            location: "Vienna, USA",
            userName: "mb@abc.com",
            password: "",
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
        password: "",
        memberType: "NPI"
      },
      {
        fullName: "Morena Silva de Vaz Setta Baccarin",
        personifyNumber: "000234193",
        badgeNumber: undefined,
        emailAddress: "Morena@acc.org",
        location: "Distric of Columbia, USA",
        userName: "Morena@gmail.org",
        password: "",
        iscienceBadge: 52143,
        bruteForceLock: true
      }
    ],
    passwordPart1: ["draw","fate","sail","use","eaux","risk","deck","mail","shop","road","fax","pan","jest","bald","copy","act","fill","put","dip","hero","sick","pack","tire","rush","drum"],
    passwordPart2: ["54", "50", "48", "7", "36", "21", "99", "45", "23", "12", "62", "10", "6", "83", "7", "1", "14", "89", "85", "38", "36", "88", "89", "25", "23","24"],
    passwordPart3: ["need","tie","mask","lazy","fork","see","team","bald","fly","give","beam","dine","halt","rice","boom","mild","want","path","draw","dare","far","just","duty","game","pig","lost"],
  },
  mutations: {
    ADD_SEARCH_HISTORY: function(state, result) {
      let date = new Date(),
      timestamp = date.toLocaleString();
      result["timestamp"] = timestamp;
        state.searchHistory.unshift(result);

      state.searchHistory = state.searchHistory.slice(
        0,
        Math.max(15, state.searchHistory.length - 1)
      );
    },
    REPLACE_MEMBER_DATA: function(state, member) {
      let index = state.searchReturn.indexOf(member);
      if (index !== -1) {
        state.searchReturn[index] = member;
      }
    },
    SET_SINGLE_RESULT: function(state, result){
      state.singleReturn = result;
      let date = new Date(),
        timestamp = date.toLocaleString();
      let packet = Object({
        sharedBy: state.adminUserName,
        timestamp: timestamp,
        memberName: result.fullName,
        memberType: result.memberType,
        badgeNumber: result.badgeNumber,
        personifyNumber: result.personifyNumber,
        emailAddress: result.emailAddress
      });

      state.shares.unshift(packet); 
    }
  },
  getters: {
    searchHistoryCount: function(state) {
      return state.searchHistory.length;
    }
  },
  actions: {
    replaceMemberData({ commit }) {
      commit("REPLACE_MEMBER_DATA");
    }
  }
});

function getDateStamp() {
  let date = new Date(),
  timestamp = date.toLocaleString();
  return timestamp;
};
