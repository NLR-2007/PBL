// js/firebase.js
// Firebase compat init & helpers - include this with <script src="js/firebase.js"></script>

// firebaseConfig is loaded from firebaseConfig.js
if (!window.firebaseConfig) {
  console.error("Firebase config missing! Make sure firebaseConfig.js is loaded.");
}

if (!firebase.apps.length) {
  firebase.initializeApp(window.firebaseConfig);
}

// services
const auth = firebase.auth();
const db = firebase.firestore();

// google provider
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

// Auth helpers
async function signInWithGoogle() {
  try {
    await auth.signInWithPopup(googleProvider);
  } catch (err) {
    console.error("Google sign-in error:", err);
    throw err;
  }
}

async function signOutUser() {
  await auth.signOut();
}

window.auth = auth;
window.db = db;
window.googleProvider = googleProvider;
window.signInWithGoogle = signInWithGoogle;
window.signOutUser = signOutUser;
