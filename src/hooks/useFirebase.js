import React, { useEffect, useState } from 'react';
import { signOut, GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';

import { initializeAppAuthentication } from '../firebase/firebase.init';
import { addUser } from '../dataSlice/dataSlice';
import axios from 'axios';
const useFirebase = () => {
    initializeAppAuthentication()
    const dispatch = useDispatch();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const google = () => {
        setLoading(true);
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                // const user = ;
                console.log(result.user);
                dispatch(addUser({
                    displayName: result.user.displayName,
                    email: result.user.email,
                    createdAt: result.user.metadata.createdAt,
                    photoURL: result.user.photoURL,
                    uid: result.user.uid
                }))

                setLoading(false);
                axios.put('http://localhost:5000/user', {
                    displayName: result.user.displayName,
                    email: result.user.email,
                    createdAt: result.user.metadata.createdAt,
                    photoURL: result.user.photoURL,
                    uid: result.user.uid
                }).then(res => console.log(res))
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                alert('something happened')
                setLoading(false)

                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
    useEffect(() => {
        setLoading(true)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // setUser(user);
                dispatch(addUser({
                    displayName: user.displayName,
                    email: user.email,
                    createdAt: user.metadata.createdAt,
                    photoURL: user.photoURL,
                    uid: user.uid
                }))
                setLoading(false)
            }
            else {
                setLoading(false)
            }

        });
    }, []);
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch(addUser({}));
        }).catch((error) => {
            // An error happened.
        });
    }
    return {
        user,
        google,
        loading,
        logOut
    };
};

export default useFirebase;