<?php
/**
 * Created by IntelliJ IDEA.
 * User: test
 * Date: 16/04/2015
 * Time: 10:23
 */
session_start();
// test variable session of user
$isUser = isset($_SESSION["user"]) && !empty($_SESSION['user']);
$user = $_SESSION['user'];
if($isUser){

    // scandir — List files and directories inside the specified path
    // Returns an array of files and directories from the directory.
    $dirdata = '../data';
    $resultscandir = scandir($dirdata,SCANDIR_SORT_ASCENDING);
    // remove file extensions name
    $resultscandir = array_map(function($e){
        return pathinfo($e, PATHINFO_FILENAME);
    },$resultscandir);

    $key = array_search($user,$resultscandir);

    if($key){
        header('Content-Type: application/json');
        echo file_get_contents("../data/$user.json");
        //echo $isUser;
    }
}

else{

    //send 401 on header
    header('HTTP/1.0 401 Unauthorized');
}