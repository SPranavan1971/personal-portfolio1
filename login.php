<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/css002.css">
    <title>Login and Signup Forms</title>
    
</head>
<body>



    <div class="forms-container">
        <div class="login-container">
            <div class="login-box">
                <h2 class="login-title">Login</h2>
        
            <form>
                <div class="form-group">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" required>
                </div>
                <div class="form-group password">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required>
                    <span class="show-password-icon" onclick="togglePasswordVisibility(this)"><br><img src="img/eye.jpg.png"; width="40px"; height="40px"; ></span>
                    
                </div>
                
                <button type="submit">Login</button>
                <p class="signup-link">If you Don't have an account? <a href="signup.php">Signup here</a></p>
            </form>
        </div>
    </div>

    <script src="js/password.js"></script> 
</body>
</html>
