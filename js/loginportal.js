document.getElementById("loginaccount").addEventListener("click", doprocessinglogin);

 function doprocessinglogin(e) {
 	e.preventDefault()

let loginemail =document.getElementById('loginemail').value;
let loginpassword =document.getElementById('loginpassword').value;
let remember_me =document.getElementById('remember_me').value;
var passkeylength= loginpassword.length;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// alert(remember_me);
if (loginemail=="") {
document.getElementById('logemailerror').style.display='block';
document.getElementById('logemailerror').style.color='red';
document.getElementById('logemailerror').innerHTML='Enter Valid Email Address';
}

else if (remember_me.clicked==false) {
document.getElementById('logcheckerror').style.display='block';
document.getElementById('logcheckerror').style.color='red';
document.getElementById('logcheckerror').innerHTML='Agree to Terms';
}

else if (loginpassword=="") {
document.getElementById('logepasserror').style.display='block';
document.getElementById('logepasserror').style.color='red';
document.getElementById('logepasserror').innerHTML='Enter Valid Password';
}

else if (passkeylength<=4) {
document.getElementById('logepasserror').style.display='block';
document.getElementById('logepasserror').style.color='red';
document.getElementById('logepasserror').innerHTML='password is too short';
}else{
document.getElementById('logepasserror').style.display='none';
document.getElementById('logemailerror').style.display='none';

// alert(loginpassword);

// let save data
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
// document.getElementById("txtHint").innerHTML = this.responseText;
// check return value
var responsenews = this.responseText;


// create an element and hold response
var elementput = document.createElement("input"); 
elementput.setAttribute('type', 'text'); 
elementput.setAttribute('value', responsenews); 
elementput.setAttribute('id', 'totalresponse'); 

// check response value;
var responsenewsred= elementput.value;


// generate url random links
let length=270;
const characters='abcdefghijklmnopqrstuvwxyz1234567890';
let outcome= "";
const characterslength=characters.length;
for (var i = 0; i <= length; i++) {
	outcome+= characters.charAt(Math.floor(Math.random()*characterslength));
}
let url= outcome;

// upon successful 
// check for client types and redirect them
if (responsenewsred=="Invalid password") {
document.getElementById('logepasserror').style.display='block';
document.getElementById('logepasserror').style.color='red';
document.getElementById('logepasserror').innerHTML='Invalid password';

}
else if (responsenewsred=="Buyer") {
		// set current user cookie
document.cookie="email="+ encodeURIComponent(loginemail);
window.location="index.php?en="+url;
// end of identity
}

else if (responsenewsred=="Distributor") {
	
// set current user cookie
document.cookie="email="+ encodeURIComponent(loginemail);
window.location="com/dashboard.php?en="+url;
// end of identity
}

else if (responsenewsred=="Seller") {
	// set current user cookie
document.cookie="email="+ encodeURIComponent(loginemail);
window.location="com/dashboard.php?en="+url;
// end of identity
}
else if (responsenewsred=="Freelancer") {
	// set current user cookie
document.cookie="email="+ encodeURIComponent(loginemail);
window.location="com/dashboard.php?en="+url;
// end of identity
}



      }
    };
    // send data for check
    xmlhttp.open("GET", "storekey/loginreg.php?email="+loginemail+"&password="+loginpassword, true);
    xmlhttp.send();
// end of state

















}

}