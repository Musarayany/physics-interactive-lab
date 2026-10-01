/* Private analytics configuration for Physics Interactive Lab.
   Analytics reports are NOT shown in the public site.
   If measurementId is empty, the app tries Firebase Analytics using the existing
   Firebase Web App configuration and lets Firebase resolve the GA4 stream dynamically.
*/
window.PHYSICS_ANALYTICS = Object.freeze({
  enabled: true,
  measurementId: "",
  firebaseConfig: Object.freeze({
    apiKey: "AIzaSyCeJuG2qpvLRkmG323SlFWwad5VGfI5BZQ",
    authDomain: "attendance-system-3b8a7.firebaseapp.com",
    databaseURL: "https://attendance-system-3b8a7-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "attendance-system-3b8a7",
    storageBucket: "attendance-system-3b8a7.firebasestorage.app",
    messagingSenderId: "548061123272",
    appId: "1:548061123272:web:f1e1063aa7069acbf4cbfd"
  })
});
