 document.getElementById('requestForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert("Thank you! Your request has been submitted.");
    this.reset();
});

