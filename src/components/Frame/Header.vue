<template>
<div>
    <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#" id="title">MyFirstApp</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
    <b-navbar-nav class="ml-auto">
        <b-nav-item @click="redirect('/login')">Login</b-nav-item>
        <b-nav-item @click="redirect('/register')">Register</b-nav-item>
    </b-navbar-nav>
    </b-collapse>
    </b-navbar>
</div>
</template>


<style scoped lang="scss">
    @import "assets/colors.scss";
    #title{
        color:$primary !important;
    }
</style>

<script>
import ROUTER from 'router'
export default{
    methods:{
        redirect(route){
            ROUTER.push(route)
        }
    }
}
</script>

