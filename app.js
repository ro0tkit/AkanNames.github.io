/*
*/


const checkAkan = (e) => {
    e.preventDefault();
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    const femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

    const frm = document.querySelector("#frmAkans");
    const fd = new FormData(frm);
    const gender = fd.get("gender");
    const dob = fd.get("dob");

    if (gender == "male"){
        console.log("Your Akan name is "+maleAkanNames)
    }else{
        console.log("Your Akan name is "+maleAkanNames)
    }
  
}






document.querySelector("#frmAkans").addEventListener("submit", checkAkan);