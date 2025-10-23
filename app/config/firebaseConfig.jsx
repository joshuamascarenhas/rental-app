import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB3Xrqn3BAOvI-A4N26HS29Z37qlq458pA',
  authDomain: 'rentalapp-58fff.firebaseapp.com',
  projectId: 'rentalapp-58fff',
  storageBucket: 'rentalapp-58fff.firebasestorage.app',
  messagingSenderId: '358692643701',
  appId: '1:358692643701:web:0d94bb7d9d446cfa40293c',
  measurementId: 'G-R831JQM9SB',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
