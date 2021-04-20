# Vue 3, Vuex, Typescript, PWA, yarn, [Bulma CSS Framework](https://bulma.io/)


## Initialise firebase auth and web app

To run, initialise firebase and add `firebase.ts` in `src` folder.

```
import firebase from 'firebase/app'
import 'firebase/auth'



const firebaseConfig = {
    .... 
    // #get this from firebase
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
