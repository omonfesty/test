
document.getElementById("createaccount").addEventListener("click", doprocessing);

 function doprocessing(e) {
 	e.preventDefault();
// get clients 
let firstname = document.getElementById('firstname').value;
let lastname = document.getElementById('lastname').value;
let confirmpassword = document.getElementById('confirmpassword').value;
let password = document.getElementById('password').value;
let emailaddress = document.getElementById('emailaddress').value;
let currentaddress = document.getElementById('currentaddress').value;
let localgovt = document.getElementById('lga').value;
let state = document.getElementById('state').value;
let clientcategory = document.getElementById('clientcategory').value;
let country = document.getElementById('country').value;
let phone = document.getElementById('phone').value;
let businestype = document.getElementById('businestype').value;

var passkeylength= password.length;
var verypasskeylength= confirmpassword.length;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// alert(phone);
// alert(businestype);
// validation 
if (firstname=="") {
document.getElementById('firstnameerror').style.display='block';
document.getElementById('firstnameerror').style.color='red';
document.getElementById('firstnameerror').innerHTML='Enter First Name';
}

else if (lastname=="") {
document.getElementById('lastnameerror').style.display='block';
document.getElementById('lastnameerror').style.color='red';
document.getElementById('lastnameerror').innerHTML='Enter Last Name';
}
else if (country=="NA") {
document.getElementById('countryerror').style.display='block';
document.getElementById('countryerror').style.color='red';
document.getElementById('countryerror').innerHTML='Select your Nationality';
}

else if (clientcategory=="NA") {
document.getElementById('clientcategoryerror').style.display='block';
document.getElementById('clientcategoryerror').style.color='red';
document.getElementById('clientcategoryerror').innerHTML='Which Service Role do you want ?';
}

else if (state=="NA") {
document.getElementById('stateerror').style.display='block';
document.getElementById('stateerror').style.color='red';
document.getElementById('stateerror').innerHTML='Select your State';
}

else if (emailaddress=="") {
document.getElementById('emailerror').style.display='block';
document.getElementById('emailerror').style.color='red';
document.getElementById('emailerror').innerHTML='Enter Valid Email Address';
}



else if (currentaddress=="") {
document.getElementById('addresserror').style.display='block';
document.getElementById('addresserror').style.color='red';
document.getElementById('addresserror').innerHTML='Enter present Address';
}else if (phone=="") {
document.getElementById('phoneerror').style.display='block';
document.getElementById('phoneerror').style.color='red';
document.getElementById('phoneerror').innerHTML='Enter phone number';
}

else if (password=="") {
document.getElementById('passworderror').style.display='block';
document.getElementById('passworderror').style.color='red';
document.getElementById('passworderror').innerHTML='Enter your password';
}

else if (confirmpassword=="") {
document.getElementById('confirmpassworderror').style.display='block';
document.getElementById('confirmpassworderror').style.color='red';
document.getElementById('confirmpassworderror').innerHTML='Verify your password';
}

else if (passkeylength<=4) {
document.getElementById('passworderror').style.display='block';
document.getElementById('passworderror').style.color='red';
document.getElementById('passworderror').innerHTML='password is too short';
}else if (verypasskeylength<=4) {
document.getElementById('confirmpassworderror').style.display='block';
document.getElementById('confirmpassworderror').style.color='red';
document.getElementById('confirmpassworderror').innerHTML='Verify password is too short';
}
else if (confirmpassword!=password) {
document.getElementById('confirmpassworderror').style.display='block';
document.getElementById('confirmpassworderror').style.color='red';
document.getElementById('confirmpassworderror').innerHTML='Password mismatch';
}
else if (businestype=="NA") {
document.getElementById('businestypeerror').style.display='block';
document.getElementById('businestypeerror').style.color='red';
document.getElementById('businestypeerror').innerHTML='Select Business Catory';
}


else{

// check for email validity
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(emailaddress.match(mailformat)){

	// hide errors
document.getElementById('confirmpassworderror').style.display='none';
document.getElementById('firstnameerror').style.display='none';
document.getElementById('lastnameerror').style.display='none';
document.getElementById('countryerror').style.display='none';
document.getElementById('clientcategoryerror').style.display='none';
document.getElementById('stateerror').style.display='none';
document.getElementById('emailerror').style.display='none';
document.getElementById('addresserror').style.display='none';
document.getElementById('passworderror').style.display='none';
document.getElementById('confirmpassworderror').style.display='none';
document.getElementById('phoneerror').style.display='none';
// end of hidden errors

// alert("correct data");

// let save data
var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("regsponse").innerHTML = this.responseText;
        document.getElementById("regsponsesuccess").innerHTML = this.responseText;
         
        
         alert(this.responseText);
      window.location="login.php?pass="+password+"&email="+emailaddress;

        // alert("correct data red");
      }
    };
    xmlhttp.open("GET", "storekey/savereg.php?email="+emailaddress+"&phone="+phone+ "&category="+clientcategory+"&state="+state+"&country="+country+"&firstname="+firstname+"&lastname="+lastname+"&confirmpassword="+confirmpassword+"&password="+password+"&currentaddress="+currentaddress+"&localgovt="+localgovt+"&businestype="+businestype, true);
    xmlhttp.send();
// end of state






}else {
document.form1.text1.focus();
document.getElementById('emailerror').style.display='block';
document.getElementById('emailerror').style.color='red';
document.getElementById('emailerror').innerHTML='invalid Email Address';

}




}


}