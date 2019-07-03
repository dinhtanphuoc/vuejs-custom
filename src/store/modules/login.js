import apiDefault from '../../api/index';

const state = {
  user: {},
  token: {},
  permission: {}
};

const getters = {};

const actions = {
  getProfile() {
    return apiDefault()
  }
};

const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
