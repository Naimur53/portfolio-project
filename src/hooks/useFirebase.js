import React, { useEffect, useState } from 'react';
import { signOut, GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { initializeAppAuthentication } from '../firebase/firebase.init';
import { addUser, setLoading } from '../dataSlice/dataSlice';
import axios from 'axios';
const useFirebase = () => {
    initializeAppAuthentication()
    const dispatch = useDispatch();
    const [user, setUser] = useState({});
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const google = () => {
        dispatch(setLoading(true));
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info. 
                console.log(result.user);
                axios.put('https://stark-atoll-95180.herokuapp.com/user', {
                    displayName: result.user.displayName,
                    email: result.user.email,
                    createdAt: result.user.metadata.createdAt,
                    photoURL: result.user.photoURL,
                    uid: result.user.uid
                }).then(res => {
                    dispatch(setLoading(false));

                    dispatch(addUser({
                        displayName: result.user.displayName,
                        email: result.user.email,
                        createdAt: result.user.metadata.createdAt,
                        photoURL: result.user.photoURL,
                        uid: result.user.uid
                    }))
                })
                    .catch(error => {
                        console.log(error, 'save');

                        logOut()
                        dispatch(setLoading(false));

                        toast.error('Unknown error happen', {
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    })
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                console.log(error, 'login');
                toast.error('Unknown error happen', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                }); 675.
                dispatch(setLoading(false))

                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
    useEffect(() => {
        dispatch(setLoading(true))
        console.log('there');
        onAuthStateChanged(auth, (user) => {
            if (user) {

                axios.get(`https://stark-atoll-95180.herokuapp.com/user?email=${user.email}`)
                    .then(res => {
                        dispatch(addUser(res.data))
                        dispatch(setLoading(false))
                    })
            }
            else {
                dispatch(setLoading(false))

            }

        });
    }, [auth, dispatch]);
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
        logOut
    };
};

export default useFirebase;