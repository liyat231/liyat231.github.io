
document.getElementById('loginForm').addEventListener('submit', function(e) {
 e.preventDefault();
 var username = document.getElementById('username').value;
 var password = document.getElementById('password').value;
 var errorMsg = '';


 if (username !== 'user123') {
   errorMsg = 'WRONGGGGGGGGG';
 } else if (password !== 'cheesecake') {
   errorMsg = 'Wrong!';
 } else {
   window.location.href = "index.html";
   return;
 }
 document.getElementById('errorMsg').textContent = errorMsg;
});
