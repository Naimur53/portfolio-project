import React, { useEffect, useState } from 'react';
import { signOut, GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

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
                console.log(result.user);
                axios.put('http://localhost:5000/user', {
                    displayName: result.user.displayName,
                    email: result.user.email,
                    createdAt: result.user.metadata.createdAt,
                    photoURL: result.user.photoURL,
                    uid: result.user.uid
                }).then(res => {
                    setLoading(false);

                    dispatch(addUser({
                        displayName: result.user.displayName,
                        email: result.user.email,
                        createdAt: result.user.metadata.createdAt,
                        photoURL: result.user.photoURL,
                        uid: result.user.uid
                    }))
                })
                    .catch(error => {
                        logOut()
                        setLoading(false);

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
                toast.error('Unknown error happen', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                }); 675.
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
        loading,
        logOut
    };
};

export default useFirebase;