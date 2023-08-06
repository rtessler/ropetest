<?php
require_once PROJECT_ROOT_PATH . "/Model/Database.php";
class NewsModel extends Database
{
    private $tableName = 'news';

    public function get($limit = DB_DEFAULT_LIMIT)
    {
        //return $this->select("SELECT * FROM INQUIRY ORDER BY create_date DESC LIMIT ?", ["i", $limit]);

        $sql = "SELECT * FROM $this->tableName ORDER BY create_date DESC LIMIT $limit";

        echo $sql;

        try {
            
            $result = $this->connection->query($sql);

            if ($result && $result->num_rows > 0) {
                //return $result->fetch_assoc();

                $output = array();
                while($row = mysqli_fetch_assoc($result))
                {
                    $output[] = $row;
                }
                return $output;
                // return json_encode($output);
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

    public function insert($params) {
        static $fname = "insert";

        $fields = ["title" => 's',
        "test" => 's',
        "image_url" => 's'];

        $sql = "INSERT INTO $this->tableName (";

        $i = 0;
        foreach($fields as $name => $type) {

            $sql .= $name;

            if ($i < count($fields)-1)
                $sql .= ",";

            $i++;
        }

        $sql .= ") ";
        $sql .= " VALUES (";

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
                return $this->connection->insert_id;
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