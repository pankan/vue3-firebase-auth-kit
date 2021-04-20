<template>
    <div>
        Hello {{currentUser?.providerData[0].email}}
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import firebase from 'firebase/app';
import 'firebase/auth'
import { useStore } from 'vuex'

@Options({
    components: {
    },
})
export default class Home extends Vue {
    store:any
    currentUser:any = null
    mounted(){
        this.store = useStore();
        this.currentUser = this.store.getters.currentUser;
        firebase.auth().onAuthStateChanged(user => {
            if (!user){
                this.$router.push('/login');
            }
        });
    }
}
</script>
