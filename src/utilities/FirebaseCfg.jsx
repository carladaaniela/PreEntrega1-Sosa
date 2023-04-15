import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBpTs8ZFufGH75r5WxvW7LsnLu0SkdeFkY",
  authDomain: "romaandco--sosa-carla.firebaseapp.com",
  projectId: "romaandco--sosa-carla",
  storageBucket: "romaandco--sosa-carla.appspot.com",
  messagingSenderId: "1053926207262",
  appId: "1:1053926207262:web:4a70ad27b183194e61630f",
};

export const FirebaseInit = () => {
  return initializeApp(firebaseConfig);
};
