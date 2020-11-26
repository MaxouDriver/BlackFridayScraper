<template>
<nav id="header" class="fixed w-full z-30 top-0 text-white">
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
            <div class="pl-4 flex items-center">
            <a class="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                MYDEALS
            </a>
            </div>
            <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
            <ul class="list-reset lg:flex justify-end flex-1 items-center">
                <li class="mr-3">
                   <router-link
                    to="/"
                    class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                    exact
                    >Home</router-link>
                </li>
                <keep-alive>
                    <component 
                    :is="currentNavComponent"
                    ></component>
                </keep-alive>
            </ul>
            </div>
        </div>
        <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
      </nav>
</template>
<script>
import NotAuthenticated from './links/NotAuthenticated.vue';
import Authenticated from './links/Authenticated.vue';

export default {
  name: "navbar",
  components: {
    NotAuthenticated,
    Authenticated
  },
  computed: {
    currentNavComponent(){
      return this.$store.getters.authenticatedUser !== undefined ? "authenticated" : "not-authenticated"
    }
  },
};
</script>
