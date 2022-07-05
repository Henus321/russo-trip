import { initializeApp } from 'firebase/app';
import { getDocs, getFirestore, collection, query } from 'firebase/firestore';

const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: 'russo-trip.firebaseapp.com',
  projectId: 'russo-trip',
  storageBucket: 'russo-trip.appspot.com',
  messagingSenderId: '493943409370',
  appId: '1:493943409370:web:7ec3da17002b128e7d73e3',
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'pathways');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const pathwaysInfo = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return pathwaysInfo;
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
