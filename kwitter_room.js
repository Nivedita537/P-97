
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD-6ynMVHg_NJyq2UCQUSA79CgJ0M82F8c",
    authDomain: "kwitter-3c26a.firebaseapp.com",
    databaseURL: "https://kwitter-3c26a-default-rtdb.firebaseio.com",
    projectId: "kwitter-3c26a",
    storageBucket: "kwitter-3c26a.appspot.com",
    messagingSenderId: "1025817082546",
    appId: "1:1025817082546:web:e0a71818dded11b12467ab"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE

var user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+" ! "
function addroom()
{
  var room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"  });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_room.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="kwitter.html";

}