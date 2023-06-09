import { Auth } from 'aws-amplify'

export const state = () => ({
    isAuthenticated: false,
    user: null
})

export const mutations = {
    set(state, user) {
        state.isAuthenticated = !!user
        state.user = user
    }
}

export const actions = {
    async load({ commit }) {
        try {
            const user = await Auth.currentAuthenticatedUser()
            commit('set', user)

            if (user) {
                await dispatch('user/getUser', user.username, { root: true })
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

        await dispatch('user/findOrCreateUser', user, { root: true })

        return user
    },

    async handleForgotPassword(email) {
        try {
            await Auth.forgotPassword(email);
            // Password reset confirmation code sent to the user's email address
            // Provide appropriate feedback to the user
        } catch (error) {
            console.log(error);
            // Handle error
        }
    },

    async handleResetPassword() {
        try {
            await Auth.forgotPasswordSubmit(email, confirmationCode, newPassword);
            // Password successfully reset
            // Provide appropriate feedback to the user
        } catch (error) {
            console.log(error);
            // Handle error
        }
    },


    async logout({ commit }) {
        await Auth.signOut()
        commit('set', null)
    }
}