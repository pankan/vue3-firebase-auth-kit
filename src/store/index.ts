import { createStore } from 'vuex'

export default createStore({
  state: {
    currentUser: null
  },
  mutations: {
    setCurrentUser(state: any, payload: any) {
      localStorage.setItem('currentUser',JSON.stringify(payload.user));
      state.currentUser = payload.user
    }
  },
  actions: {
    currentUser(context: any, user: any) {
      context.commit('setCurrentUser', { user })
    },
  },
  getters: {
    currentUser(state: any) {
      if (localStorage.getItem('currentUser') !== null){
        state.currentUser = JSON.parse(localStorage.getItem('currentUser') || '');
      }
      return state.currentUser
    },
  },
  modules: {
  }
})