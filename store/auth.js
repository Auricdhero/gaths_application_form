import { Auth } from 'aws-amplify'

export const state = () => ({
    isAuthenticated: false,
    user: null,
    isLoading: false
})

export const mutations = {
    set(state, user) {
        state.isAuthenticated = !!user
        state.user = user
        // state.isLoading = value
    }
}

export const actions = {
    async load({ commit }) {
        try {
            const user = await Auth.currentAuthenticatedUser()
            commit('set', user)

            if (members) {
                await dispatch('user/getMembers', member.username, { root: true })
            }

            return user
        } catch (error) {
            commit('set', null)
        }
    },

    async register(_, { fullName, institution, email, password }) {
        const user = await Auth.signUp({
            fullName,
            institution,
            username: email,
            password
        })
        return user
    },

    async confirmRegistration(_, { email, code }) {
        return await Auth.confirmSignUp(email, code)
    },

    async login({ commit }, { email, password }) {
        const user = await Auth.signIn(email, password)
        commit('set', user)

        // await dispatch('members/findOrCreateMembers', member, { root: true })

        return user
    },

    async forgotPassword(_, { email }) {
        const user = await Auth.forgotPassword(email)
        commit('set', user)
        return user
    },

    async forgotPasswordSubmit(_, { email, code, newPassword }) {
        const user = await Auth.forgotPasswordSubmit({
            email,
            code,
            newPassword
        })
        return user
    },

    async logout({ commit }) {
        await Auth.signOut()
        commit('set', null)
    }
}