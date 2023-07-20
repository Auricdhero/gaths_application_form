import { API } from 'aws-amplify';
import * as gqlQueries from '~/src/graphql/queries';
import * as gqlMutations from '~/src/graphql/mutations';
// import * as gqlSchema from '~/src/graphql/schema'

export const state = {
    user: [],
    user: null
}

export const getters = {
    authMode: (state, getters, rootState) => rootState.auth.isAuthenticated ? 'AMAZON_COGNITO_USER_POOLS' : 'API_KEY'
}

export const mutations = {
    set(state, { key, value }) {
        state[key] = value;
    }
}

export const actions = {
    async listUser({ dispatch }) {
        return dispatch('query', { key: 'user', query: 'listUser' })
    },

    async getUser({ dispatch }, id) {
        return dispatch('get', { key: 'user', query: 'getUser', id })
    },

    async createUser({ dispatch }, input) {
        return dispatch('mutate', { key: 'user', mutation: 'createUser', input })
    },

    async updateUser({ dispatch }, input) {
        return dispatch('mutate', { key: 'user', mutation: 'updateUser', input })
    },

    async get({ commit, getters }, { key, query, id }) {
        const { data } = await API.graphql({
            query: gqlQueries[query],
            variables: { id },
            authMode: getters.authMode
        })

        const value = data[query]
        if (key) commit('set', { key, value })
        return value;
    },

    async query({ commit, getters }, { key, query, filter }) {
        const { data } = await API.graphql({
            query: gqlQueries[query],
            variables: { filter },
            authMode: getters.authMode
        })

        const value = data[query].items
        if (key) commit('set', { key, value })
        return value;
    },

    async mutate({ commit, getters }, { key, mutation, input }) {
        const { data } = await API.graphql({
            query: gqlMutations[mutation],
            variables: { input },
            authMode: getters.authMode
        })

        const value = data[mutation]
        if (key) commit('set', { key, value })
        return value;
    }
}