
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    
    if (username === "aravind@aithcloud.com" && password === "998877665") {
        alert("Welcome, Aravind! You are logedin");
        
    } 
     else {
        alert("Invalid username or password!");
        
    }
});