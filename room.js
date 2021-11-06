var firebaseConfig = {
      apiKey: "AIzaSyD0EExcqd_IlSm1FTKUtvVgvIwS0928vHk",
      authDomain: "kwitter-77196.firebaseapp.com",
      databaseURL: "https://kwitter-77196-default-rtdb.firebaseio.com",
      projectId: "kwitter-77196",
      storageBucket: "kwitter-77196.appspot.com",
      messagingSenderId: "701373563157",
      appId: "1:701373563157:web:c149edbf2d05c171efe91c",
      measurementId: "G-YZ53VQQH05"
    };
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room name - "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoom(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();
var username=localStorage.getItem("username");
document.getElementById("usernamewelcome").innerHTML="Welcome "+username;

function addroom(){
      roomname=document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",roomname);
      window.location="page.html";
}

function logout(){
      window.location="index.html";
      localStorage.removeItem("roomname");
      localStorage.removeItem("username");
}