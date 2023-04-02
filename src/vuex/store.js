import { createStore } from "vuex";

import axios from "axios";

const store = createStore({
  state: {
    users: [],
    group:[]
  },
  actions: {
    GET_USERS_FROM_API({ commit }) {
      return axios("http://localhost:3000/players", {
        method: "GET",
      })
        .then((response) => {
          commit("SET_USERS_TO_VUEX", response.data);
          return response;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    ADD_TO_GROUP({commit}, user) {
      commit('SET_GROUP', user);
    }
  },
  mutations: {
    SET_USERS_TO_VUEX: (state, users) => {
      state.users = users;
    },
    SET_GROUP: (state, user) => {
      state.group.push(user)
    }
  },
  getters: {
    USERS(state) {
      return state.users;
    },
    GROUP(state) {
      return state.group;
    }
  },
});
export default store;
