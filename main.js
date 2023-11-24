const firebaseConfig = {
  apiKey: "AIzaSyA4-iA019T9BT3fF-WoyMJiXYgz86tSAb8",
  authDomain: "blogging-website-97118.firebaseapp.com",
  databaseURL: "https://blogging-website-97118-default-rtdb.firebaseio.com",
  projectId: "blogging-website-97118",
  storageBucket: "blogging-website-97118.appspot.com",
  messagingSenderId: "323141500247",
  appId: "1:323141500247:web:97959ddd4121e7777ed212",
};

firebase.initializeapp(firebaseconfig);
var contactformDB = firebase.database().ref('contactform')
 
document.getElementById('contactform').addEventListener("submit", submitform)

