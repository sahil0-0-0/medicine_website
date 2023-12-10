
function valid() {

	let firstname = document.getElementById('fname').value ;
	let middlename = document.getElementById('Mname').value ;
	let lastname = document.getElementById('lname').value ;
	let mobilenumber = document.getElementById('number').value ;
	let agevalidation = document.getElementById('age').value ;
	let validemail = document.getElementById('email').value ;
	let var1 = validemail.indexOf("@") ;
	let var2 = validemail.lastIndexOf(".");
	let password1 = document.getElementById('rpass').value ;
	let password2 = document.getElementById('cpass').value ;
	let male = document.getElementById('male') ;
	let female = document.getElementById('female') ;
	let other = document.getElementById('other') ;
	let selectlocation = document.getElementById('selcon') ;
	let selectstat = document.getElementById('selstat') ;
	let selectcity = document.getElementById('selcity') ;

	if ( firstname == null || firstname == "" )
	{
		alert("Enter First name...!!") ;
		return 0 ;
	}
	else if ( middlename == null || middlename == "" )
	{
		alert("Enter middle name...!!") ;
		return 0 ;
	}
	else if ( lastname == null || lastname == "" )
	{
		alert("Enter last name...!!") ;
		return 0 ;
	}
	else if ( mobilenumber == null || mobilenumber == "")
	{
		alert("Enter mobile number...!!") ;
		return 0 ;
	}
	else if ( mobilenumber.length != 10 )
	{
		alert("Enter 10 digit mobile number...!!") ;
		return 0 ;
	}
	else if ( agevalidation == null || agevalidation  == "" )
	{
		alert("Enter age...!!");
		return 0 ;
	}
	else if ( agevalidation < 0 || agevalidation > 100 )
	{
		alert("Enter valid age...!!") ;
		return 0 ;
	}
	else if ( validemail == null || validemail == "" )
	{
		alert("please enter your Email...!!") ;
		return 0 ;
	}
	else if ( var1 < 1 || ( var2 - var1 < 2 ))
	{
		alert("please enter valid email...!!") ;
		return 0 ;
 	}
 	else if ( password1 == null || password1 == "" ) 
 	{
 		alert("Enter password...!!") ;
 	}
 	else if ( password2 == null || password2 == "" ) 
 	{
 		alert("Enter confirm password...!!") ;
 	}
	else if ( password1 != password2 )
	{
		alert("new password does not match . Enter password again...!!");
		return 0 ; 
	}
	else if ( !male.checked && !female.checked && !other.checked )
	{
		alert("please select gender...!!") ;
		return 0 ;
	} 
	else if ( selectlocation.selectedIndex == 0 )
	{
		alert("select your country...!!") ;
		return 0 ;
	}
	else if ( selectstat.selectedIndex == 0 )
	{
		alert("select your stat...!!") ;
		return 0 ;
	}
	else if ( selectcity.selectedIndex == 0 )
	{
		alert("select your city...!!") ;
		return 0 ;
	}

}

function validationOfLogIn() {

	let validlogEmail = document.getElementById('em').value ;
	let variable1 = validlogEmail.indexOf("@") ;
	let variable2 = validlogEmail.lastIndexOf(".");
	let loginpass = document.getElementById("pass").value ;

	if ( validlogEmail == null || validlogEmail == "" )
	{
		alert("please enter your Email...!!") ;
		return 0 ;
	}
	else if ( variable1 < 1 || ( variable2 - variable1 < 2 ))
	{
		alert("please enter valid email...!!") ;
		return 0 ;
 	}
 	else if ( loginpass == null || loginpass == "")
 	{
 		alert("Enter password...!!") ;
 	}

}