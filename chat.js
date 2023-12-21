// Configuração do Firebase do seu aplicativo
const firebaseConfig = {
    apiKey: "AIzaSyDvE1WifXNC5z2KviQfkBjF5QComh3ONPM",
    authDomain: "kwitter-cb790.firebaseapp.com",
    projectId: "kwitter-cb790",
    storageBucket: "kwitter-cb790.appspot.com",
    messagingSenderId: "639392717445",
    appId: "1:639392717445:web:b6fc0248c0bdf05dae67ec"
  };
  
  // Inicialize o Firebase
  firebase.initializeApp(firebaseConfig);
  
  function addUser() {
    // Obtenha o nome do usuário do elemento de entrada
    const user_name = document.getElementById("user_name").value;
  
    // Verifique se o nome do usuário não está vazio
    if (user_name.trim() !== "") {
      // Atualize o banco de dados Firebase com o nome do usuário
      firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
      });
  
      // Armazene o nome do usuário localmente
      localStorage.setItem("user_name", user_name);
  
      // Redirecione para a página chat_room.html
      window.location = "chat_room.html";
    } else {
      // Exiba uma mensagem de erro se o nome do usuário estiver vazio
      alert("Por favor, insira um nome de usuário válido.");
    }
  }
  