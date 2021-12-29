const firebaseConfig = {
    apiKey: "AIzaSyAzozxCvybmGB03H5eOwziqqxLhPbrur5o",
    authDomain: "sean-7a884.firebaseapp.com",
    projectId: "sean-7a884",
    storageBucket: "sean-7a884.appspot.com",
    messagingSenderId: "1008898157861",
    appId: "1:1008898157861:web:c575a9f45c1c6b85d33ecc",
    measurementId: "G-FHE0TH1X17"
  };

firebase.initializeApp(firebaseConfig);
const dbService = firebase.firestore()
  
// dbService.collection("todos").doc("10102938").set({
//     todo: "할일"
// })
// dbService.collection("todos").doc("10102938").delete()

const todoform = document.querySelector("#todo-form")

const todoInput = todoform.querySelector("input")



function ontodoSubmit(event){
    event.preventDefault()
}

todoform.addEventListener("submit", ontodoSubmit)




