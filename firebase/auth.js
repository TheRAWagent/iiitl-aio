import app from './config'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const providergithub = new GithubAuthProvider();


export const signin = async (email,password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return user
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return errorMessage
      });
}

export const google=async()=>{
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);

      });
}

export const github=async()=>{
    signInWithPopup(auth, providergithub)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;

    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GithubAuthProvider.credentialFromError(error);
    });
}



export const userAuth=auth
export const checkUser=onAuthStateChanged
