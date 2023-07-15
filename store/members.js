export const state = {
    member: null
}

export const mutations = {
    setMember(state, member) {
        state.member = member
    }
}

export const actions = {
    async getMembers({ commit, dispatch, id }) {
        const member = await dispatch('api/get', { query: 'getMember', id }, { root: true })
        commit('setMember', member)
        return member;
    },

    async createMembers({ commit, dispatch }, input) {
        const user = await dispatch('api/mutate', { mutation: 'createMember', input }, { root: true })
        commit('setMember', member)
        return member
    }
}