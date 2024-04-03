# svelte-firebase-auth
Auth with firebase for svelte projects.


In order to use firebase for authentication, you first need
to go to the firebase console and add an app with the authentication
methods you want to support enabled. During the process of adding the
app you should get a snippet of JavaScript code that defines a 
`firebaseConfig` variable with the settings that you need in order
to call the `getApp()` and `getAuth()` APIs.  Put this snippet inside
`${lib}/firebase.ts`.

Then, sample code like this should work, and you need to decide 
what you want to happen on user sign in / sign out inside the 
custom event fired by the sign in button.

```ts
<script lang="ts">
    import { GoogleAuthProvider, getAuth } from "@firebase/auth";
    import { initializeApp } from "@firebase/app";
    import { Signin } from "@ourway/svelte-firebase-auth";
    import { firebaseConfig } from "$lib/firebase";

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    console.log("AUTH: ", auth)
    const googleAuthProvider = new GoogleAuthProvider();

    function user(e: CustomEvent) {
        console.log("CUSTOM EVENT: ",e);
    }
</script>

<h1>Cluster</h1>
<p>Please sign in.</p>
<Signin {auth} {googleAuthProvider} on:user_changed={user}/>

```
