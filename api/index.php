<?php
require __DIR__ . "/inc/bootstrap.php";
require PROJECT_ROOT_PATH . "/Controller/Api/UserController.php";
require PROJECT_ROOT_PATH . "/Controller/Api/InquiryController.php";
require PROJECT_ROOT_PATH . "/Controller/Api/NewsController.php";
require PROJECT_ROOT_PATH . "/Controller/Api/AdminController.php";

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode( '/', $uri );

$i = 1;

// [0] => [1] => ropetest-server [2] => index.php [3] => user [4] => list

$requestType = end($uri); //$uri[$i + 2];

if (!isset($requestType)) {
    header("HTTP/1.1 404 Not Found");
    exit();
}

//if ((isset($uri[$i + 2]) && $uri[$i + 2] != 'user') || !isset($uri[$i + 3])) {
// if ((isset($uri[$i + 2]) && $uri[$i + 2] != 'user')) {
//     header("HTTP/1.1 404 Not Found");
//     exit();
// }


$controller = null;

switch ($requestType) {
    case 'test':
        echo 'The server is alive: endpoints: user,inquiry,news,admin';
        exit;
    case 'user':
        $controller = new UserController();
        break;
    case 'inquiry':
        $controller = new InquiryController();
        break;
    case 'news':
        $controller = new NewsController();
        break;
    case 'admin':
        $controller = new AdminController();
    default:
        echo 'endpoint not found<br>';
        echo 'server: ' .$_SERVER['HTTP_HOST'] . '<br>';
        echo 'RequestType: ' . $requestType . '<br>';
        echo implode(",",$uri) . '<br>';
        echo 'The server is alive: endpoints: user,inquiry,news,admin';
       //header("HTTP/1.1 404 Not Found");
        exit();
}

$requestMethod = $_SERVER["REQUEST_METHOD"];

if ($controller)
    $controller->processRequest();

// $strMethodName = $uri[$i + 3] . 'Action';
// $controller->{$strMethodName}($requestMethod);
?>
