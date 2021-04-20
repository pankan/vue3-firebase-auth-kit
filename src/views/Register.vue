<template>
    <div class="register is-flex is-flex-direction-column is-justify-content-center column is-4 is-offset-4">
        <img alt="Vue logo" src="../assets/kipato-logo.svg" class="auth-logo mt-6 mb-4">
        <input type="email" name="email" id="email" v-model="email" class="input mb-2">
        <input type="password" name="password" id="password" v-model="password" class="input mb-2">
        <input type="button" value="Register" v-on:click="registerNewUser()" class="button is-primary mb-2">
        <router-link to="/login">
            <button class="button is-ghost">Login</button>
        </router-link>
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import firebase from "firebase/app";
import "firebase/auth";

export default class Register extends Vue {
    mounted(){
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.$router.push('/');
            }
        });
    }
    email = "";
    password = "";

    registerNewUser():void{
        firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(res => {
            // console.log(res);
            this.$router.push('/');
        }).catch(function(error){
            // var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
    }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>