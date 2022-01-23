import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from './../Firebase/firebase.init';


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState();
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    //? Sign In With Google Function
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                console.log('login');
            })
    }


    // ? Logout Function
    const logOut = () => {
        signOut(auth)
            .then(() => {
                console.log('logout');
            })
    }



    // ? Observe User State Change Function
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        });
        return () => unsubscribed;
    }, [])


    // ? Return Method
    return {
        user,
        signInUsingGoogle,
        logOut
    }

}


export default useFirebase;
