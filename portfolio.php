<?php 
   if(isset($name) || isset($email)|| isset($message)){ 
   $name = $_POST['name'];
   $email = $_POST['email'];
   $message = $_POST['message'];

   //data base connection code
   $conn = new mysqli('localhost','root','','first');
   if($conn->connect_error)
    {
       die('Connection Failed : '.$conn->connect_error);

    }
    else
    {
        $stmt =$conn->prepare("insert into portfolio(name, 
        email, message)values(?,?,?)");
        $stmt->bind_param("sss",$name,$email,$message);
        $stmt->execute();
        echo "message sended succefully...";
        $stmt->close();
        $conn->close();

    }
}

   ?>