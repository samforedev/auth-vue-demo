import authService from '@/services/authService';

const state = {
    user: null,
    authToken: localStorage.getItem('authToken') || null,
};

const mutations = {
    SET_USER(state, user) {
        state.user = user;
    },
    SET_AUTH_TOKEN(state, token) {
        state.authToken = token;
        localStorage.setItem('authToken', token);
    },
    LOGOUT(state) {
        state.user = null;
        state.authToken = null;
        localStorage.removeItem('authToken');
    },
};

const actions = {
    async login({commit}, credentials) {
        const { token, user } = await authService.login(credentials);
        commit('SET_AUTH_TOKEN', token);
        commit('SET_USER', user);
    },
    logout({commit}) {
        commit('LOGOUT');
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};