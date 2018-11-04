import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const state = {
  postIds: [],
  posts: {}
}

export const mutations = {
  SET_POST (state, { post }) {
    state.postIds.push(post.id)
    state.posts[post.id] = post.title
  }
}
export default new Vuex.Store({
  state,
  mutations
});
