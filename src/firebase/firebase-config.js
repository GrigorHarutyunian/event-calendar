import { initializeApp } from "firebase/app";
import { getDatabase, ref, update } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAtYfTpLC47Zfby5pQ9mbh7fUsRnchgOvY",
  authDomain: "event-calendar-28772.firebaseapp.com",
  projectId: "event-calendar-28772",
  storageBucket: "event-calendar-28772.appspot.com",
  messagingSenderId: "534789948352",
  appId: "1:534789948352:web:744716781903501fa2fe25",
};

export const app = initializeApp(firebaseConfig);
