<?php
if (isset($_POST['submit'])) {
    if (isset($_POST['name']) && isset($_POST['phonenum']) &&
        isset($_POST['email']) && isset($_POST['age']) &&
        isset($_POST['gender']) && isset($_POST['eventname']) && isset($_POST['tickets'])) {
        
        $name = $_POST['name'];
        $phonenum = $_POST['phonenum'];
        $email = $_POST['email'];
        $age = $_POST['age'];
        $gender = $_POST['gender'];
        $eventname = $_POST['eventname'];
		$tickets = $_POST['tickets'];

        $host = "localhost";
        $dbUsername = "root";
        $dbPassword = "";
        $dbName = "eventdb";

        $conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);

        if ($conn->connect_error) {
            die('Could not connect to the database.');
        }
        else {
            $Select = "SELECT email FROM register WHERE email = ? LIMIT 1";
            $Insert = "INSERT INTO register(name, phonenum, email, age, gender, eventname, tickets) values(?, ?, ?, ?, ?, ?, ?)";

            $stmt = $conn->prepare($Select);
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $stmt->bind_result($resultEmail);
            $stmt->store_result();
            $stmt->fetch();
            $rnum = $stmt->num_rows;

            if ($rnum == 0) {
                $stmt->close();

                $stmt = $conn->prepare($Insert);
                $stmt->bind_param("sisisii",$name, $phonenum, $email, $age, $gender, $eventname, $tickets);
                if ($stmt->execute()) {
                    header("Location:payment.php");
                }
                else {
                    echo $stmt->error;
                }
            }
            else {
                echo "Someone already registers using this email.";
            }
            $stmt->close();
            $conn->close();
        }
    }
    else {
        echo "All field are required.";
        die();
    }
}
else {
    echo "Submit button is not set";
}
?>