import { createStore } from "vuex";

const store = createStore({
    state(){
        return {
            products: [],
            authenticatedUser: localStorage.authenticatedUser !== undefined ? JSON.parse(localStorage.authenticatedUser) : undefined
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
        },
        setUser(state, payload){
            console.log(payload)
            state.authenticatedUser = payload
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
        setProduct(context, payload){
            context.commit('set', payload)
        },
        setUser(context, payload){
            context.commit('setUser', payload)
            localStorage.authenticatedUser = JSON.stringify(payload);
        },
        deleteUser(context){
            context.commit('setUser', undefined)
            localStorage.authenticatedUser = undefined;
        },
    },
    getters: {
        productList(state){
            return state.products
        },
        authenticatedUser(state){
            return state.authenticatedUser
        },
    }
})

export default store;