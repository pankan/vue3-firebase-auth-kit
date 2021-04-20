<template>
  <div class="container">
    <div id="nav">
      <input type="button" value="Signout" v-on:click="signoutUser()" v-if='currentUser' class="button is-primary">
      <!-- {{currentUser}} -->
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import firebase from 'firebase/app'
import 'firebase/auth'
import { useStore } from 'vuex'

export default class App extends Vue {
  store:any
  currentUser:any = null
  mounted(){
      this.store = useStore();
      firebase.auth().onAuthStateChanged(user => {
        this.store.dispatch('currentUser', user);
        this.currentUser = this.store.getters.currentUser;
      });
  }
  signoutUser():void{
    firebase.auth().signOut();
  }
}
</script>

<style lang="scss" src="./Styles.scss"></style>