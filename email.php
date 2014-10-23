<?php
	 sleep(3);
	 //variables
	 $subject="New Mail";
	 $email="info@farmdrive.co.ke";
	 
	 //form variables
	 $name=$_POST['jina'];
	 $mail=$_POST['mail'];
	 $msg=$_POST['msg'];
	 
	 $body=  <<<EOD
--------------------------------------- <br>
<b>From:</b>$name <br>
<b>Email:</b>$mail <br>
--------------------------------------- <br>
<b>Subject:</b>$subject<br>
--------------------------------------- <br>
<b>Message:</b><br>
$msg
<br>
EOD;
	
/*	$headers= "From: $mail\r\n ";
	$headers .= "Content-type: text/html\r\n";	
*/
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$success= mail($email,$subject, $body, $headers);
	
	if($success){
	$msg ='<p><i class="icon icon-ok"></i>Thanks [We shall get back to you]</p>';
	}
	else{
	$msg ='<p> <i class="icon icon-info"></i> Sorry an error occurred [Please Try Again]</p>';	
	}

	echo $msg;
?>