document.getElementById("logportalccount").addEventListener("click",legaldoprocessinglogin);

 function legaldoprocessinglogin(e) {
 	e.preventDefault()

let loginemail =document.getElementById('loginemail').value;
let logportemailerror =document.getElementById('logportemailerror').value;
let resetpaswordnew =document.getElementById('resetpaswordnew').value;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if (loginemail=="") {
document.getElementById('logportemailerror').style.display='block';
document.getElementById('logportemailerror').style.color='red';
document.getElementById('logportemailerror').innerHTML='Enter Valid Email Address';
}else{

// alert(loginemail);

	// let save data


var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("succeserror").innerHTML = this.responseText;
        var responsenews = this.responseText;
        // alert(responsenews);

      }
    };
    xmlhttp.open("GET", "storekey/updateresetpasswork.php?email="+loginemail+ "&passnew="+resetpaswordnew, true);
    xmlhttp.send();



}
}
