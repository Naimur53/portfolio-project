import React, { useEffect, useState } from 'react';
import { signOut, GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, getIdToken } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { initializeAppAuthentication } from '../firebase/firebase.init';
import { addUser, setLoading } from '../dataSlice/dataSlice';
import axios from 'axios';
const useFirebase = () => {
    initializeAppAuthentication()
    const dispatch = useDispatch();
    const [currentUser, setCurrentUser] = useState({});
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const google = () => {
        dispatch(setLoading(true));
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info. 

                axios.put('https://jhon-portfolio-server-production.up.railway.app/user', {
                    displayName: result.user.displayName,
                    email: result.user.email,
                    createdAt: result.user.metadata.createdAt,
                    photoURL: result.user.photoURL,
                    uid: result.user.uid
                }).then(res => {
                    dispatch(setLoading(false));

                    // dispatch(addUser({
                    //     displayName: result.user.displayName,
                    //     email: result.user.email,
                    //     createdAt: result.user.metadata.createdAt,
                    //     photoURL: result.user.photoURL,
                    //     uid: result.user.uid
                    // }))
                })
                    .catch(error => {


                        logOut()
                        dispatch(setLoading(false));

                        toast.error('Unknown error happen while saving data', {
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

                toast.error('Unknown error happen login', {
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


    const getJWT = (user) => {
        getIdToken(user)
            .then(res => {

                localStorage.setItem('idToken', res)
            })


    }
    useEffect(() => {
        dispatch(setLoading(true));
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
                getJWT(user);
                axios.get(`https://jhon-portfolio-server-production.up.railway.app/user?email=${user.email}`)
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
    useEffect(() => {
        const callJwt = setInterval(() => {
            console.log('iam geting the jwtoken ');
            if (currentUser?.email) {
                getJWT(currentUser)
            }
        }, 60000 * 2.5)
        return () => {
            console.log('delete');
            clearInterval(callJwt)
        }
    }, [currentUser])

    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch(addUser({}));
        }).catch((error) => {
            // An error happened.
        });
    }
    return {
        currentUser,
        google,
        logOut
    };
};

export default useFirebase;