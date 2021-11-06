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

  var username=localStorage.getItem("username");
  var roomname=localStorage.getItem("roomname");

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
namewithtag="<h4>"+name+"<img class='user_tick' src='download (1).png'></h4>";
messagewithtag="<h4 class='message_h4'>"+message+"</h4>";
likebutton="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
spanwithtag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
row=namewithtag+messagewithtag+likebutton+spanwithtag;
document.getElementById("output").innerHTML+=row;
//End code
    } });  }); }
getData();

function updatelike(message_id)
{
    console.log("clicked on like button - "+message_id);
    button_id= message_id;
    likes=document.getElementById(button_id).value;
    updatedlikes=Number(likes)+1;
    console.log(updatedlikes);

    firebase.database().ref(roomname).child(message_id).update({
          like:updatedlikes
    });
}

function logout(){
    window.location="index.html";
    localStorage.removeItem("roomname");
    localStorage.removeItem("username");
}

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(roomname).push({
          name:username,
          message:msg,
          like:0
    });
    document.getElementById("msg").value="";
}