
//ADD YOUR FIREBASE LINKS HERE
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
function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id=" + Room_names + " onclick ='rediectToRoomName(this.id)'>" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function rediectToRoomName(name){
      console.log(name)
      localStorage.setItem("room_name", name);
      window.location = "TextR_page.html"
}

function Logout(){
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location = "index.html"
}
