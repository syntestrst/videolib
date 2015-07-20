<?php
/**
 * Created by IntelliJ IDEA.
 * User: test
 * Date: 16/04/2015
 * Time: 10:23
 */

session_start();
header('Content-type: application/json');

if (stripos($_SERVER["CONTENT_TYPE"], "application/json") === 0) {
    $_POST = json_decode(file_get_contents("php://input"), true);
}
$callback = array();
$callback['authOK'] = false;

$isinplogin = isset($_POST['inpLogin']) && !empty($_POST['inpLogin']);

if($isinplogin){

    //
    //
    if($_POST['inpLogin'] == 'mark' OR $_POST['inpLogin'] == 'john'){
        $_SESSION['user'] = $_POST['inpLogin'];
        $callback['authOK'] = true;
    }

}
echo json_encode($callback);
