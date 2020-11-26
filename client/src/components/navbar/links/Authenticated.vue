<template>
    <li class="mr-3">
        <router-link
            to="/deals"
            class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
            >My deals</router-link>
    </li>
    <li class="mr-3">
        <router-link
            to="/wishes"
            class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
            >My wishes</router-link>
    </li>
    <li class="mr-3">
        <button
            @click="logout"
            class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >

        Logout</button>
    </li>
</template>

<script>
export default {
    name: "authenticated",
    methods: {
        logout(){
            this.$store.dispatch("deleteUser");
            this.$router.push("/")
        }
    }
}
</script>

<style>

</style>