<?php
    if(isset($_FILES['file'])){
        $name = $_FILES['file']['name'];
        $file = $_FILES['file']['tmp_name'];
        $error = $_FILES['file']['error'];

        $destination = "../files/$name";

        $uploaded = move_uploaded_file($file,$destination);

        if($uploaded){
            $res = [
                "error" => false,
                "status" => http_response_code(200),
                "statusText" => "The file $name was uploaded successfully",
                "files" => $_FILES['file']
            ];
            
        }else{
            $res = [
                "error" => true,
                "status" => http_response_code(400),
                "statusText" => "There was an error uploading the file $name",
                "files" => $_FILES['file']
            ];

        }
         echo json_encode($res);
    }
?>