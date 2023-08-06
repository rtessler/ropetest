<?php
class NewsController extends BaseController
{
    public function processRequest()
    {
        $requestMethod = $_SERVER["REQUEST_METHOD"];

        switch ($requestMethod) {
            case 'GET':
                $this->get();
                break;
      
            case 'POST':
                $this->insert();
                break;

            case 'PUT':
                $this->update();
                break;
            case 'DELETE':
                $this->delete();
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

    private function get()
    {
        $error = '';

        $params = $this->getQueryStringParams();

        try {
            $model = new NewsModel();
            $intLimit = DB_DEFAULT_LIMIT;
            
            if (isset($params['limit']) && $params['limit']) {
                $intLimit = $params['limit'];
            }

            $data = $model->get($intLimit);

            $responseData = json_encode($data);
        } catch (Error $e) {
            $error = $e->getMessage().'Something went wrong! Please contact support.';
            $strErrorHeader = 'HTTP/1.1 500 Internal Server Error';
        }
    
        // send output 
        if (!$error) {
            $this->sendOutput(
                $responseData,
                array('Content-Type: application/json', 'HTTP/1.1 200 OK')
            );
        } else {
            $this->sendOutput(json_encode(array('error' => $error)), 
                array('Content-Type: application/json', $strErrorHeader)
            );
        }
    }

    private function insert() {

        $error = '';

        try {
            $json = file_get_contents('php://input');

            // var_dump(json_decode($json, true));

            $data = json_decode($json, true);
            $model = new NewsModel();
            $res = $model->insert($data);
            $responseData = $res;
            print('response: ' . $res);

        } catch (Error $e) {
            $error = $e->getMessage().'Something went wrong! Please contact support.';
            $strErrorHeader = 'HTTP/1.1 500 Internal Server Error';
        }

        if (!$error) {
            $this->sendOutput($responseData, array('Content-Type: application/json', 'HTTP/1.1 200 OK'));
        } else {
            $this->sendOutput(json_encode(array('error' => $error)), 
                array('Content-Type: application/json', $strErrorHeader)
            );
        }
    }
}