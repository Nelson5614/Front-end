import Vue from 'vue'
import Vuex from 'vuex'
import repository from '@/api/repository';



Vue.use(Vuex);

export default new Vuex.Store({
    modules: {

        auth: {
            state:()=>({
                user:null
            }),

            getters:{
                user: state => state.user,
                authenticated: state => state.user !==null,
            },

            mutations:{
                SET_USER(state, user){
                    state.user = user;
                }
            },

            actions:{
                async login({commit}, user){
                    await repository.createSession();
                    const {data} = await repository.login(user);
                    commit('SET_USER', data);
                }
            }
        }
    }
});