<?php
/**
 * Created by IntelliJ IDEA.
 * User: test
 * Date: 16/04/2015
 * Time: 10:23
 */

session_start();
$isUser = isset($_SESSION["user"]) && !empty($_SESSION['user']);
if($isUser){
    $_SESSION['user'] = null;
    unset($_SESSION['user']);
}
header('HTTP/1.0 401 Unauthorized');