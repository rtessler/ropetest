<?php
class UserController extends BaseController
{
    public function processRequest()
    {
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        print($requestMethod);

        switch ($requestMethod) {
            case 'GET':
                // if ($this->userId) {
                //     $response = $this->getUser($this->userId);
                // } else {
                //     $response = $this->getAllUsers();
                // };
                $this->getUsers();
                break;
      
            case 'POST':
                // $response = $this->createUserFromRequest();
                $this->insert();
                break;

            case 'PUT':
                // $response = $this->updateUserFromRequest($this->userId);
                break;
            case 'DELETE':
                // $response = $this->deleteUser($this->userId);
                break;
            default:
                // $response = $this->notFoundResponse();
                break;
        }
        // header($response['status_code_header']);
        // if ($response['body']) {
        //     echo $response['body'];
        // }
    }

    private function getUsers()
    {
        $strErrorDesc = '';
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        $arrQueryStringParams = $this->getQueryStringParams();

        if (strtoupper($requestMethod) == 'GET') {
            try {
                $userModel = new UserModel();
                $intLimit = 10;
                
                if (isset($arrQueryStringParams['limit']) && $arrQueryStringParams['limit']) {
                    $intLimit = $arrQueryStringParams['limit'];
                }
                $arrUsers = $userModel->getUsers($intLimit);
                $responseData = json_encode($arrUsers);
            } catch (Error $e) {
                $strErrorDesc = $e->getMessage().'Something went wrong! Please contact support.';
                $strErrorHeader = 'HTTP/1.1 500 Internal Server Error';
            }
        } else {
            $strErrorDesc = 'Method not supported';
            $strErrorHeader = 'HTTP/1.1 422 Unprocessable Entity';
        }
        // send output 
        if (!$strErrorDesc) {
            $this->sendOutput(
                $responseData,
                array('Content-Type: application/json', 'HTTP/1.1 200 OK')
            );
        } else {
            $this->sendOutput(json_encode(array('error' => $strErrorDesc)), 
                array('Content-Type: application/json', $strErrorHeader)
            );
        }
    }

    private function insert() {

        $strErrorDesc = '';

        try {
            $json = file_get_contents('php://input');

            // var_dump(json_decode($json, true));

            $data = json_decode($json, true);
            $userModel = new UserModel();
            $res = $userModel->insert($data);
            $responseData = $res;
            print('response: ' . $res);

        } catch (Error $e) {
            $strErrorDesc = $e->getMessage().'Something went wrong! Please contact support.';
            $strErrorHeader = 'HTTP/1.1 500 Internal Server Error';
        }

        if (!$strErrorDesc) {
            $this->sendOutput($responseData, array('Content-Type: application/json', 'HTTP/1.1 200 OK'));
        } else {
            $this->sendOutput(json_encode(array('error' => $strErrorDesc)), 
                array('Content-Type: application/json', $strErrorHeader)
            );
        }
    }
}