<?php
	$host="localhost";
	$uname="root";
	$password="";
	$dbname="portfolio";
	$con=mysqli_connect($host,$uname,$password,$dbname);
	if(!$con)
	{
		die("A connnectionn to dbserver could not be establish".mysqli_error($con));
	}		
	?>    	