<?php
require_once PROJECT_ROOT_PATH . "/Model/Database.php";
class UserModel extends Database
{
    public function getUsers($limit)
    {
        return $this->select("SELECT * FROM users ORDER BY user_id ASC LIMIT ?", ["i", $limit]);
    }

    public function insert($params) {
        static $fname = "insert";

        $username = $params['username'];
        $email = $params['user_email'];
        $status = $params["user_status"];

        // printf("%s username: %s email: %s status: %d", $fname, $username,  $email, $status);

        $sql = "INSERT INTO USERS (username, user_email, user_status) VALUES ('$username', '$email', $status)";

        // printf("sql: %s", $sql);

        if ($this->connection->query($sql) === TRUE) {
            printf("%s ok", $fname);
            return "record inserted successfully: id: " . $this->connection->insert_id;
        } else {
            $msg = "Error: " . $sql . "<br>" . $this->connection->error;
            print($msg);
            return $msg;
        }

        // $stmt = "INSERT INTO user (username, user_email, user_status) VALUES (?, ?, ?)";

        // try {
        //     printf("%s 1\n", $fname);
        //     $stmt = $this->connection->prepare($stmt);
        //     printf("%s 2\n", $fname);
        //     $username = $params['username'];
        //     $email = $params['user_email'];
        //     $status = $params["user_status"];
        //     printf("%s 3 %s %s %s", $fname, $username . ' '.  $email . ' ' . $status);
        //     $stmt->bind_param("ssi", $username, $email, $status);
        //     printf("%s 4", $fname);
        //     $stmt->execute();
        //     return $stmt->rowCount();
        // } catch(Exception $e) {
        //     printf("%s error %s\n", $e->getMessage());
        //     throw New Exception( $e->getMessage() );
        // } 
    }
}