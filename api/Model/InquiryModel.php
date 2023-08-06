<?php
require_once PROJECT_ROOT_PATH . "/Model/Database.php";
class InquiryModel extends Database
{
    private $tableName = 'inquiry';

    public function get($limit = DB_DEFAULT_LIMIT)
    {
        //return $this->select("SELECT * FROM INQUIRY ORDER BY create_date DESC LIMIT ?", ["i", $limit]);

        $sql = "SELECT * FROM $this->tableName ORDER BY create_date DESC LIMIT $limit";

        try {
            
            $result = $this->connection->query($sql);

            if ($result && $result->num_rows > 0) {
                //return $result->fetch_assoc();

                $output = array();
                while($row = mysqli_fetch_assoc($result))
                {
                    $output[] = $row;
                }
                // header('Access-Control-Allow-Origin: *');
                // header('Content-type: application/json');
                return $output;
                //return json_encode($output);
            }
            else {
                return [];
            }
        } catch (Exception $e) {
            throw new Exception($e->getMessage());   
        }	
        finally {
            $this->connection->close();
        }
    }

    protected function sendEmail($params) {

        $headers = "MIME-Version: 1.0" . "\r\n"; 
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n"; 
        $to = ADMIN_EMAIL;
        $subject = "You recieved an inquiry";

        $htmlContent = ' 
        <html> 
        <head> 
            <title>You recieved an Inquiry</title> 
        </head> 
        <body>
        <h1>You received an inquiry from ' . $params['first_name'] . ' ' . $params['last_name'] . '</h1>';

        $htmlContent .= '<table>';

        foreach($params as $key => $val) {
            $htmlContent .= '<tr>';

            $htmlContent .= "<td>$key</td>";

            if ($val === 1) {
                $val = 'Yes';
            }
            else if ($val === 0) {
                $val = "No";
            }
            
            $htmlContent .= "<td>$val</td>";
            $htmlContent .= "</tr>";
        }
        
        $htmlContent .= '
        </table>
        </body> 
        </html>';

        mail($to, $subject, $htmlContent, $headers);
    }

    public function insert($params) {
        static $fname = "insert";

        $fields = ["first_name" => 's',
        "last_name" => 's',
        "email" => 's',
        "company" => 's',
        "phone" => 's',
        "address" => 's',
        "action_call" => 'i',
        "action_info" => 'i',
        "action_offer" => 'i',
        "r28" => 'i',
        "r58" => 'i',
        "r83" => 'i',
        "r140" => 'i',
        "r140plus" => 'i',
        "u28" => 'i',
        "u58" => 'i',
        "u83" => 'i',
        "misc" => 'i',
        "rope_diameter" => 's',
        "testing_experience" => 'i',
        "message" => 's'];

        $sql = "INSERT INTO $this->tableName (";

        $i = 0;
        foreach($fields as $name => $type) {

            $sql .= $name;

            if ($i < count($fields)-1)
                $sql .= ",";

            $i++;
        }

        $sql .= ") VALUES (";

        $i = 0;
        foreach($fields as $name => $type) {

            if ($type == 's')
                $sql .= '"' . $params[$name] . '"';
            else
                $sql .= $params[$name];

            if ($i < count($fields)-1)
                $sql .= ",";

            $i++;
        }

        $sql .= ")";

        try {

            if ($this->connection->query($sql) === TRUE) {

                $this->sendEmail($params);
                //header('Access-Control-Allow-Origin: *');

                $data = array("id" => $this->connection->insert_id);
                return json_encode($data);
            } else {
                $msg = "Error: " . $sql . "<br>" . $this->connection->error;
                throw new Exception($msg);   
            }

        }
        catch (Exception $e) {
            throw new Exception($e->getMessage());   
        }	
        finally {
            $this->connection->close();
        }
    }
}