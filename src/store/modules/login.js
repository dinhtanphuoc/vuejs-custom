import { apiDefault } from '../../api';

const state = {
  user: {},
  token: {},
  permission: {}
};

const getters = {};

const actions = {
  getProfile() {
    try {
      apiDefault({
        method: 'post',
        url: 'posts',
        data: {
          user_name: 'janedoe',
          pass_word: 's00pers3cret'
        },
        headers: {
          Authorization: `Bearer 4444444444`
        }
      }).then(res => {
        console.log(res.data)
      })
    } catch (error) {
      console.log(error)
    }
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
