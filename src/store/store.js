import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        token: null,
        posts: []
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
            localStorage.setItem('token', token);
        },
        clearToken(state) {
            state.token = null;
            localStorage.removeItem('token');
        },
        setPosts(state, posts) {
            state.posts = posts;
        },
        addPost(state, newPost) {
            state.posts.push(newPost);
        },
        removePost(state, post) {
            state.posts = state.posts.filter(p => p.id !== post.id);
        },
    }
});

export default store;