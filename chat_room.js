const firebaseConfig = {
  apiKey: "AIzaSyDvE1WifXNC5z2KviQfkBjF5QComh3ONPM",
  authDomain: "kwitter-cb790.firebaseapp.com",
  projectId: "kwitter-cb790",
  storageBucket: "kwitter-cb790.appspot.com",
  messagingSenderId: "639392717445",
  appId: "1:639392717445:web:b6fc0248c0bdf05dae67ec"
};

function addRoom() {
  const room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adicionando nome da sala"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "index.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      const Room_names = childSnapshot.key;
      console.log("Nome da sala -" + Room_names);
      const row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
}

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "index.html";
}

getData();
