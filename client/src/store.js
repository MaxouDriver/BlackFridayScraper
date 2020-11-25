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
            state.products = [...state.products, payload];
        },
        remove(state, payload){
            state.products = state.products.filter(
                product => product.id !== payload.id
            );
        },
        addProductSites(state, payload){
            state.products = state.products.map(product => {
                if (product.id === payload.product.id){
                    return {
                        ...product,
                        sites: [...product.sites, payload]
                    } 
                }else{
                    return product
                }
            });
        },
        deleteProductSites(state, payload){
            state.products = state.products.map(product => {
                if (product.id === payload.product.id){
                    return {
                        ...product,
                        sites: product.sites.filter(site => {
                            console.log(site.id, payload.id)
                            console.log(site.id !== payload.id)
                            return site.id !== payload.id
                        })
                    } 
                }else{
                    return product
                }
            });
        },
        set(state, payload){
            state.products = payload
        }
    },
    actions: {
        addProduct(context, payload){
            context.commit('add', payload)
        },
        deleteProduct(context, payload){
            context.commit('remove', payload)
        },
        addProductSites(context, payload){
            context.commit('addProductSites', payload)
        },
        deleteProductSites(context, payload){
            context.commit('deleteProductSites', payload)
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