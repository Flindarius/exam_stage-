// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB0nAFCjtW-dc5h8iCyRZgtmcEjjUTJ-QM",
  authDomain: "projestage-eb43e.firebaseapp.com",
  databaseURL: "https://projestage-eb43e.firebaseio.com",
  projectId: "projestage-eb43e",
  storageBucket: "projestage-eb43e.appspot.com",
  messagingSenderId: "326415405931",
  appId: "1:326415405931:web:68ce4d45c0e5cd941d722e",
  measurementId: "G-11M751R6E0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var messagesRef = firebase.database().ref('messages');

const txtEmail = document.getElementById('username')
const txtPassword = document.getElementById('pass1')
const txtPassword2 = document.getElementById('pass2')
const btn_SignUp = document.getElementById('sign_up')

btn_SignUp.addEventListener('click', e =>{     
  if(txtPassword.value == txtPassword2.value) {
    const email = txtEmail.value; 
    const pass = txtPassword.value;
    firebase.auth().createUserWithEmailAndPassword(email,pass);
  }
  else {
    onsole.log("les mdp ne sont pas pareils")
    
  }
})

