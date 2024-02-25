// firebaseFunctions.js

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoJIXEmv8XzdmOiL9ztyCal5Ip7v6pzEg",
  authDomain: "project1-e57e4.firebaseapp.com",
  projectId: "project1-e57e4",
  storageBucket: "project1-e57e4.appspot.com",
  messagingSenderId: "35353512297",
  appId: "1:35353512297:web:f8e3ee2ad48a2ce41115f8",
  measurementId: "G-ZKN1Z993Q8"
};
  
  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);
  
  var auth = firebase.auth();
  
  function signup() {
    var email = document.getElementById('inputEmail').value;
    var password = document.getElementById('inputPassword').value;
  
    auth.createUserWithEmailAndPassword(email, password)
      .then(function(userCredential) {
        // Signed up 
        var user = userCredential.user;
        // ...
        console.log(user);
        sessionStorage.setItem('email', user.email);
        window.location.href = '../index.html'
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(error);
      });
  }

  function signIn () {
    var email = document.getElementById('inputEmail').value;
    var password = document.getElementById('inputPassword').value;

    auth.signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("Signed in user: ", user)
    sessionStorage.setItem('email', user.email);
    window.location.href = '../index.html';
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Error: ", errorMessage)
  });
  }

  function signInWithGoogle () {
    var provider = new firebase.auth.GoogleAuthProvider();
console.log(provider)
    firebase.auth().signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    console.log(credential);
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user)
    sessionStorage.setItem('email', user.email);
    window.location.href = '../index.html'
    // IdP data available in result.additionalUserInfo.profile.
      // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(error)
    // ...
  });
  }
  
  function signOut () {
    firebase.auth().signOut()
    .then(() => {
      sessionStorage.removeItem('email');
      console.log("User logout successfully")
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  }