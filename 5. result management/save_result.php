<?php
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";

$studentName = $_POST['studentName'];
$subject = $_POST['subject'];
$marks = $_POST['marks'];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Insert result into database
$sql = "INSERT INTO results (studentName, subject, marks) VALUES ('$studentName', '$subject', '$marks')";
if ($conn->query($sql) === TRUE) {
    echo "Result saved successfully";
} else {
   
