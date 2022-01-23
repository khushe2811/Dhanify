function login()
	{
		var uname = document.getElementById("email").value;
		var pwd = document.getElementById("pwd1").value;
		var filter ='Ansh';
		if(uname =='')
		{
			alert("please enter user name.");
		}
		else if(pwd=='')
		{
        	alert("enter the password");
		}
		else if(uname!=filter)
		{
			alert("Enter valid email id.");
		}
		else if(pwd!='ansh')
		{
			alert("Password min and max length is 6.");
		}
		else
		{
	alert('Thank You for Login & You are Redirecting to Campuslife Website');
  //Redirecting to other page or webste code or you can set your own html page.
       window.location = "https://www.campuslife.co.in";
			}
	}
	//Reset Inputfield code.
	function clearFunc()
	{
		document.getElementById("email").value="";
		document.getElementById("pwd1").value="";
	}