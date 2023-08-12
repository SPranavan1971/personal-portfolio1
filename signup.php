<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/signup.css">
    <title>Signup Form</title>
</head>
<body>


<?php
    include("config-signup.php");
        
            //save form field to contact table
            if(isset($_POST['btnsave']))
            {
                //insert data to contact table
                $sqlinsert="INSERT INTO user_account_details(id,username,password,nicno)
                            VALUES('".mysqli_real_escape_string($con,$_POST['txtid'])."',
                                    '".mysqli_real_escape_string($con,$_POST['txtusername'])."',
                                    '".mysqli_real_escape_string($con,$hashed['txtpassword'])."'
                                    '".mysqli_real_escape_string($con,$_POST['txtnic'])."')";
                $resultinsert=mysqli_query($con,$sqlinsert) or die("Error in sql insert section: ".mysqli_error($con));
            }
        ?>




    <div class="signup-container">
        <h2>Sign Up</h2>
        <form id="signup-form">
            <div class="form-group">
                <label for="id">ID:</label>
                <input type="text" id="txtid" name="txtid" required>
            </div>
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="txtusername" name="txtusername" required>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="txtpassword" name="txtpassword" required>
            </div>
            <div class="form-group">
                <label for="nic">NIC Number:</label>
                <input type="text" id="txtnic" name="txtnic" required>
            </div>

          <button type="submit" class="btn btn-block btn-outline-primary" name="btnsave" id="btnsave" value="Submit">Sign Up</button>
        </form>
    </div>
    <script src="js/signup.js"></script>
</body>
</html>
