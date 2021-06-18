function validateForm(){
	var u = document.getElementById('firstname').value;
	var p = document.getElementById('lastname').value;
	if (u==""){
		alert("Please enter your First Name");
		return false;
	}
	if(p==""){
		alert("Please enter your Last Name");
		return false
	}
	else {
		alert("All data are valid! Send it to the server");
		return true;
	};
}
function validateForm1(){	
	var t= document.getElementById("userid").value;
	var y= document.getElementById("password").value;
	if(t==""){
		alert("Please enter your User ID");
		return false;
	}
	if(y==""){
		alert("Please enter your Password");
		return false;
	}
	else{
		alert("All data are valid! Send it to the server");
	return true; 
	}

}

