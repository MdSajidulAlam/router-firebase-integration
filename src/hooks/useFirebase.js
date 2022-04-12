import { useEffect, useState } from "react"
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase.init";


const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
    const [user, setUser] = useState({})

    const signInWithGoogle = () => {

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)
                console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
            // if (user) {
            //   // User is signed in, see docs for a list of available properties
            //   // https://firebase.google.com/docs/reference/js/firebase.User
            //   const uid = user.uid;
            //   // ...
            // } else {
            //   // User is signed out
            //   // ...
            // }
        });
    }, [])
    // return [user, setUser]
    return { user, signInWithGoogle, handleSignOut }
}

export default useFirebase