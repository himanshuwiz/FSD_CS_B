function validateForm() {
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    
    if (username === "admin" && password === "admin") {
        
        window.location.href = "weatherdashboard.html";
        return false; 
    } else {
        alert("Invalid username or password");
        return false; 
    }
}

