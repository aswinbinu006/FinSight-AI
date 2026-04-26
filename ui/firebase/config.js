import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDCj8YE3IF3ZY9xkJtbaMXqRNDKTA3ufKw",
  authDomain: "finsight-ai-app.firebaseapp.com",
  projectId: "finsight-ai-app",
  storageBucket: "finsight-ai-app.firebasestorage.app",
  messagingSenderId: "129937315361",
  appId: "1:129937315361:web:73d387351d4d335bdb3560"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
