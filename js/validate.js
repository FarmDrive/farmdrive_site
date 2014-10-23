/*
--This module will validate the information from the reservation information
--the clean function cleans up user input in real time..
*/
	//global variables..
	ar = Array();


//====Function to validate E-mails	
	function validate(m){
		var regex3= /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		var email=$('#mail').val();
		
		if(regex3.test(email) == false){
			//$('#err3').html('*E-mail looks incorrect');
			$('#err3').show();
			return false;
		}
		else if(regex3.test(email) == true){
			$('#err3').hide();
			return true;
		}
	}//end function...

//======function to clean user input
	function clean(e){
		//variables..
		var nme=document.getElementById('jina1');
		var nme2=document.getElementById('jina2');
		var phone=document.getElementById('phone');
		var them=document.getElementById('identity');
		var stay=document.getElementById('stay');
		var check=document.getElementById('chek');

		var regex= /[^a-z]/gi; 
		var regex2= /[^0-9]/g; 
		var regex4= /[^a-z0-9]/gi; 
		var regex5= /[^0-9]/gi; 
		
		nme.value= nme.value.replace(regex,"");
		nme2.value= nme2.value.replace(regex,"");
		phone.value= phone.value.replace(regex2,"");
		//mail.value= mail.value.replace(regex3,"");
		them.value= them.value.replace(regex4,"");
		stay.value= stay.value.replace(regex5,"");
	}	
	
	//submission validation..
	function validme(){
		 //variables.. 
		 var nme=document.getElementById('jina1');
		 var nme2=document.getElementById('jina2');
		 var phone=document.getElementById('phone');
		 var mail=document.getElementById('mail');
		 var them=document.getElementById('identity');
		 var stay=document.getElementById('stay');
		 var country=document.getElementById('nchi');
		 var arr=document.getElementById('arr');
		 var dep=document.getElementById('dep');
		 var stay=document.getElementById('stay');
		 var plan=document.getElementById('meal');
		 var pay=document.getElementById('paym');
		 var check=document.getElementById('chek');

//master if statement....
if(arr.value > dep.value ||nme.value == ""||nme2.value ==""|| phone.value=="" ||mail.value ==""|| validate(mail)==false ||them.value ==""||them.value.length <6 ||country.value==""||arr.value==""||dep.value==""||stay.value==""||stay.value>100||plan.value==""||check.value==""||check.value !=7){ 
			 if(nme.value == ""){
				 $('#err1').show();
			 }
			 else if(name.value!=""){
				 $('#err1').hide();
			 }
			 if(nme2.value ==""){
				 $('#err2').show();
			 }
			 else if(nme2.value !=""){
				 $('#err2').hide();		 
			 }
			 if(phone.value =="" ||phone.value.length <6){
				 $('#err5').show();
			 }
			 else if(phone.value !="" && phone.value.length>6){
			     $('#err5').hide();
			 }
			 if(mail.value =="" || validate(mail)==false ){
				 $('#err3').show();
			 }
			 else if(mail.value !="" && validate(mail)==true){
				 $('#err3').hide();
			 } 
			 if(them.value =="" || them.value.length <6 ){
				 $('#err4').show();
			 }
			 else if(them.value !="" || them.value.length >6 ){
				 $('#err4').hide();
			 }	
			 if(country.value==""){
				 $('#err6').show();
			 }		 
			 else if(country.value !=""){
				 $('#err6').hide();
			 }
	//----begin part two validation-----
			 if(arr.value=="" || arr.value > dep.value){
				 $('#err7').show();
			 }
			 else if(arr.value !="" && arr.value < dep.value ){
				 $('#err7').hide();
			 }
			 if(dep.value=="" || arr.value > dep.value){
				 $('#err8').show();
			 }		
			 else if(dep.value !="" && arr.value < dep.value){
				 $('#err8').hide();
			 }
			 if(stay.value=="" || stay.value>100){
				 $('#err9').show();
			 }
			 else if(stay.value !="" && stay.value<=100){
				 $('#err9').hide();
			 }
			 if(plan.value==""){
				 $('#err10').show();
			 }
			 else if(plan.value!=""){
				 $('#err10').hide();
			 }
	//--Begin part three----		 
			 if(paym.value==""){
				 $('#err11').show();
			 }
			 if(paym.value!=""){
				 $('#err11').hide();
			 }
			 
			if(check.value=="" || check.value !=7){
				 $('#err12').show();
			}
			
			else if(check.value !=""){
				 $('#err12').hide();
			}
			 
		}//end is valid...
		
		else{		
			 $("#content form").submit();
		}	
}//end the function













