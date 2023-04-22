import { Auth } from 'aws-amplify';

export const state = () => ({
    isAuthenticated: false,
    user: null
})

export const mutations = {
    set(state, user) {
        state.isAuthenticated = !!user;
        state.user = user;
    }
}

export const actions = {
    async load({ commit }) {
        try {
            const user = await Auth.currentAuthenticatedUser();
            commit('set', user);
            return user;
        } catch (error) {
            commit('set', null);
        }
    },

    async register(_, { email, password, institution, fullName }) {
        const user = await Auth.signUp({
            name: fullName,
            username: email,
            password,
            Institution: institution,

        })
        return user
    },

    async confirmRegistration(_, { email, code }) {
        return await Auth.confirmSignUp(email, code);
    },

    async login({ commit }, { email, password }) {
        // console.log('You are amazing!');
        const user = await Auth.signIn(email, password);
        commit('set', user);
        return user;
    },

    async logout({ commit }) {
        await Auth.signOut();
        this.$router.push({
            path: '/'
        })
        // alert('You are loging out!')
        commit('set', null)
    }
}