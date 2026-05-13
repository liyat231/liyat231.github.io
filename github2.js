function validateLogin(event) {
   event.preventDefault();


 const user = document.getElementById("username").value;
 const pass = document.getElementById("password").value;


 const correctUser = "user123";
 const correctPass = "cheesecake";


 if (user === correctUser && pass === correctPass) {
   alert("WELCOME!!");
   window.location.assign("index.html");
 } else {
   alert("COME AGAIN:(");
 }
}
