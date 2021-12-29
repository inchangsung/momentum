const firebaseConfig = {
    apiKey: "AIzaSyAZjQcb0wvbfQgwfyZ_s8XuAs931HjHTWA",
    authDomain: "oooo-b0e6c.firebaseapp.com",
    projectId: "oooo-b0e6c",
    storageBucket: "oooo-b0e6c.appspot.com",
    messagingSenderId: "312495183576",
    appId: "1:312495183576:web:5d8f192980304b3e9aa9ad"
  };

  firebase.initializeApp(firebaseConfig);
  const dbService = firebase.firestore()

  dbService.collection("todos").doc("124451345223").set({
      todo: "할일"
  })

  //ctrl + k + c
//dbService.collection("todos").doc("124451345223").delete()