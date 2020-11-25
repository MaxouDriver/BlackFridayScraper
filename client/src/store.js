import { createStore } from "vuex";

import axios from "axios";

const store = createStore({
    state(){
        return {
            products: []
        }
    },
    mutations: { 
        add(state, payload){
            state.products.push(payload)
        },
        set(state, payload){
            state.products = payload
        }
    },
    actions: {
        addProduct(context, payload){
            context.commit('add', payload)
        },
        fetchProduct(context){
            axios
            .get("http://localhost:4000/products")
            .then(response => {
                context.commit('set', response.data)
            })
            .catch(err => console.log(err));
        }
    },
    getters: {
        productList(state){
            return state.products
        }
    }
})

export default store;