import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		adminUserName: "Simon Pegg",
		searchHistory: [],
		searchHistoryNew: false,
		shares: [],
		sharesNew: false,
		searchReturn: [],
		singleReturn: [],
		passwordPart1: [
			"draw",
			"fate",
			"sail",
			"use",
			"eaux",
			"risk",
			"deck",
			"mail",
			"shop",
			"road",
			"fax",
			"pan",
			"jest",
			"bald",
			"copy",
			"act",
			"fill",
			"put",
			"dip",
			"hero",
			"sick",
			"pack",
			"tire",
			"rush",
			"drum"
		],
		passwordPart2: [
			"54",
			"50",
			"48",
			"7",
			"36",
			"21",
			"99",
			"45",
			"23",
			"12",
			"62",
			"10",
			"6",
			"83",
			"7",
			"1",
			"14",
			"89",
			"85",
			"38",
			"36",
			"88",
			"89",
			"25",
			"23",
			"24"
		],
		passwordPart3: [
			"need",
			"tie",
			"mask",
			"lazy",
			"fork",
			"see",
			"team",
			"bald",
			"fly",
			"give",
			"beam",
			"dine",
			"halt",
			"rice",
			"boom",
			"mild",
			"want",
			"path",
			"draw",
			"dare",
			"far",
			"just",
			"duty",
			"game",
			"pig",
			"lost"
		]
	},
	mutations: {
		UNLINK_ACCOUNT: function(state, payload) {
			console.log(payload);
			let parent = payload.parent,
				child = payload.child;
			let parentIndex = state.searchReturn.indexOf(parent),
				childIndex = state.searchReturn[parentIndex].children.indexOf(child);
			state.searchReturn[parentIndex].children.splice(childIndex, 1);
			state.searchReturn.unshift(child);
		},
		ADD_SEARCH_HISTORY: function(state, result) {
			let date = new Date(),
				timestamp = date.toLocaleString();
			result["timestamp"] = timestamp;
			state.searchHistory.unshift(result);
			state.searchHistoryNew = true;
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
		SET_SINGLE_RESULT: function(state, result) {
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
			state.sharesNew = true;
			state.shares.unshift(packet);
		},
		HISTORY_NEW_OFF: function(state) {
			state.searchHistoryNew = false;
		},
		SHARE_NEW_OFF: function(state) {
			state.sharesNew = false;
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
