import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDFiIukA13_xzycpVm1ZX_qFiCAtOe_QtE",
    authDomain: "fir-auth-249d1.firebaseapp.com",
    projectId: "fir-auth-249d1",
    storageBucket: "fir-auth-249d1.appspot.com",
    messagingSenderId: "48227191543",
    appId: "1:48227191543:web:c902710d40274ddecd21f2"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);