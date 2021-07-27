<script src="https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.8.0/firebase-auth.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.8.0/firebase-database.js"></script>
<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBaeKBvigOZvdFuHE5BPY9LvWJGCF2j7Bo",
    authDomain: "javascript-testing-feac6.firebaseapp.com",
    databaseURL: "https://javascript-testing-feac6-default-rtdb.firebaseio.com",
    projectId: "javascript-testing-feac6",
    storageBucket: "javascript-testing-feac6.appspot.com",
    messagingSenderId: "1048464237229",
    appId: "1:1048464237229:web:b0b0815f9694e377115c24"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//------------------------Ready Data-------------------------------------//
var name, classV, section, date;

function ready()
{
  name = document.getElementById('name').value;
  classV = document.getElementById('class').value;
  section = document.getElementById('section').value;
  date = document.getElementById('date').value;
}

document.getElementById('insert').onclick = function(){
  ready();
  firebase.database().ref(name).set({
    Nameofstudent : name,
    Class : classV,
    Section : section,
    Date : date
  });
}
</script>
