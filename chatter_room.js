// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDFL0zjZ0d4Lu5lUn-RtFjwOOERYBaOja8",
    authDomain: "chatter-e97ee.firebaseapp.com",
    projectId: "chatter-e97ee",
    storageBucket: "chatter-e97ee.appspot.com",
    messagingSenderId: "349454914477",
    appId: "1:349454914477:web:7107c45a8f2b7c40918724"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML="Welcome "+ username ;
//ADD YOUR FIREBASE LINKS HERE
function addRoom() {
  room_name=document.getElementById("room_name").Value;
  firebase.database().ref("/").child(room_name).update
  ({purpose:"adding room name"});
  localStorage.setItem("room_name",room_name);
  window.location = "chatter_page.html";


}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML+= row ;
   //End code
   });});}
getData();
function redirectToRoomName(name) {
  console.log(name); localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html"; }
