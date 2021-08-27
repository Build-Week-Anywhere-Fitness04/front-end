import React, { createContext, useEffect, useState } from 'react';
import { auth, db } from './Firebase';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()

    async function signup(isGoogleLogin, email, password) {

        // login with google and return
        if (isGoogleLogin) auth.signInWithPopup()
        // or 
        let userAuthData = await auth.createUserWithEmailAndPassword(email, password)



        return userAuthData
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            let userObject = { ...user }
            if (user?.uid) {
                let userCollectionData = await getUserDataFromCollections(user)
                userObject = { ...userObject, ...userCollectionData }
            }
            setCurrentUser(userObject)
        })

        return unsubscribe
    }, [])

    // make function to get user information from collections
    const getUserDataFromCollections = async (user) => {
        // get the user that is associated with current user
        // id of the document matches the id of the user
        const snapshot = await (db.collection('users').doc(user?.uid)).get()

        const userCollectionData = snapshot.data();

        return userCollectionData
    }

    const value = {
        currentUser,
        signup
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}