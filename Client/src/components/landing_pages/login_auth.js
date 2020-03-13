import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

firebase.initializeApp({
	apiKey: 'AIzaSyDLoqcbTDMFuurtAyDgVEKZ6qwo0j0Osjk',
	authDomain: 'fir-auth-tutorial-ed11f.firebaseapp.com'
});

const initialState = {
	user: [],
	isSignedIn: false,
	uiConfig: {
		signInFlow: 'popup',
		signInOptions: [
			firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			firebase.auth.GithubAuthProvider.PROVIDER_ID
		],
		callbacks: {
			signInSuccess: () => false
		}
	}
};

export default function LoginAuth() {
	const [data, setData] = useState(initialState);

	useEffect(() => {
		firebase.auth().onAuthStateChanged(user => {
			console.log(user);
		});
	}, []);

	return (
		<StyledFirebaseAuth
			uiConfig={data.uiConfig}
			firebaseAuth={firebase.auth()}
		/>
	);
}
