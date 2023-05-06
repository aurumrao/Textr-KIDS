var firebaseConfig = {
   apiKey: "AIzaSyA-xBBwso7HOpY1iBQq0HGIx4FuAUsc0As",
   authDomain: "kwitter-12979.firebaseapp.com",
   projectId: "kwitter-12979",
   storageBucket: "kwitter-12979.appspot.com",
   messagingSenderId: "470392858312",
   appId: "1:470392858312:web:062a07309b5fbf6b3da7fd"
 };
 
 // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addUser(){
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("username", user_name);
    document.getElementById("user_name").innerHTML = localStorage.getItem("username");
    window.location = "TextR_room.html";
 }