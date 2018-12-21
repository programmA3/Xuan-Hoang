<?php
include('../config.php');

//Create connection
$connect = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT);

//Check connection
if ($connect->connect_error) {
    die("Connection failed: " . $connect->connect_error);
}

$jsonReport = file_get_contents('php://input');
$objReport = json_decode($jsonReport, true);

$u_id = $objReport['u_id'];

//Query SQL
$sql = "SELECT r.r_id, r.r_total, r.r_updated, u.u_username, u.u_image FROM report r JOIN users u ON r.u_id = u.u_id WHERE r.u_id = ?";

if ($statement = $connect->prepare($sql)) {
    $statement->bind_param('i', $u_id);
    $statement->execute();
    $statement->store_result();

    if ($statement->num_rows > 0) {

        $statement->bind_result($r_id, $r_total, $r_updated, $u_username, $u_image);
        $reports = array();

        while ($statement->fetch()) {
            $report = array('r_id' => $r_id, 'r_total' => $r_total, 'r_updated' => $r_updated, 'u_username' => $u_username, 'u_image' => STAFF_IMAGE . $u_image);
            $reports[] = $report;
        }

        $jsonResult = json_encode($reports);
    } else {
        $msg = "No Results Found";
        $jsonResult = json_encode($msg);
    }
}

echo $jsonResult;
$statement->close();
$connect->close();
?>