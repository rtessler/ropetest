<html>
<head>
<title>PHP Test</title>
</head>
<body>
<?php echo '<p>Hello World</p>'; ?>

<?php
// phpinfo()

$servername = "localhost";
$username = "root";
$password = "";
$database = "rest_api_demo";

// $servername = "114.142.162.1";
// $database = "creekroa_ropetest";
// $username = "creekroa_robt";
// $password = "ropetestrobt123.";

// Create connection using musqli_connect function
$conn = mysqli_connect($servername, $username, $password, $database);
// Connection Check
if (!$conn) {
    die("Connection failed: " . $conn->connect_error);
}

else{
   echo "Connected Successfully!";
   $conn->close();
}
?>

</body>
</html>