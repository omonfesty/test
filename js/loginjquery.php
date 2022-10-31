<script  type="text/javascript">

// login page check 
$(document).ready(function(){
    $("#loginaccount").click(function(){

var loginemail =$("#loginemail").val();
var loginpassword =$("#loginpassword").val();
var remember_me =$("#remember_me").val();

var passkeylength= loginpassword.length;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


if (loginemail=="") {
$("#logemailerror").show();
$("#logemailerror").css("color", "red");
$("#logemailerror").html('Enter Valid Email Address');
}



else if (loginpassword=="") {
$("#logepasserror").show();
$("#logepasserror").css("color", "red");
$("#logepasserror").html('Enter Valid Password');
}

else if (passkeylength<=4) {
$("#logepasserror").show();
$("#logepasserror").css("color", "red");
$("#logepasserror").html('password is too short');
}else{
$("#logepasserror").hide();
$("#logemailerror").hide();




$.ajax({
url:'storekey/loginreg.php',
type:'GET',
data:{
    'email':loginemail,
    'password':loginpassword
},

success: function(data, status){
    var rest = JSON.stringify(data);
    // alert(data);
// var responsenewsred =data;
var emp = jQuery.parseJSON(data); 
var responsenewsred= emp.accounttype;

// generate url random links
var length=270;
const characters='abcdefghijklmnopqrstuvwxyz1234567890';
var outcome= "";
const characterslength=characters.length;
for (var i = 0; i <= length; i++) {
	outcome+= characters.charAt(Math.floor(Math.random()*characterslength));
}
var url= outcome;


// upon successful 
// check for client types and redirect them
if (responsenewsred=="Invalid Password") {
$("#logepasserror").show();
$("#logepasserror").css("color", "red");
$("#logepasserror").html('Invalid Password');
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


},
error:function(data,status){

    alert("dfd error");
}

})


}


})

})







</script>

