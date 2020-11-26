<template>
    <li class="mr-3">
        <router-link
            to="/deals"
            class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
            >My deals</router-link>
    </li>
    <li class="mr-3">
        <router-link
            to="/wishs"
            class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
            >My wishs</router-link>
    </li>
</template>

<script>
export default {
    name: "authenticated"
}
</script>

<style>

</style>