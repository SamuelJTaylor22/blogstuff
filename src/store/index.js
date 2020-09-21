import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "../services/AxiosService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    blogs: [],
    activeBlog: {},
    comments: []
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBlogs(state, blogs){
      state.blogs = blogs
    },
    setActiveBlog(state, blog){
      state.activeBlog = blog
    },
    removeBlog(state, id){
      state.blogs = state.blogs.filter(b => b.id != id)
    },
    setComments(state, data){
            
      state.comments = data
    },
    addComment(state, data){
      state.comments.push(data)
      state.comments= state.comments
    }
  },
  actions: {
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getBlogs({commit}){
      try {
        let res = await api.get("blogs")
        commit("setBlogs", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async getActiveBlog({commit}, id){
      try {
        let res = await api.get(`blogs/${id}`)
        commit("setActiveBlog", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getComments({commit}, id){
      try {
        let res = await api.get(`blogs/${id}/comments`)
        commit("setComments", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async createBlog({dispatch, state}, blog){
      let res = await api.post('blogs', {title:blog.title, body:blog.body, creatorEmail:state.profile.email})
      
      dispatch("getBlogs")
    },
    async editBlog({commit}, blog){
      let res = await api.put(`blogs/${blog.id}`, blog)
      commit("setActiveBlog", blog)
    },
    async deleteBlog({commit},id){
      let res = await api.delete(`blogs/${id}`)
      commit("removeBlog", id)
      commit("setActiveBlog", {})
      router.push({ name: "Home" })
    },
    async addComment({commit}, comment){
      let res = await api.post('comments', comment)
      commit('addComment', comment)
    }

  },
});
