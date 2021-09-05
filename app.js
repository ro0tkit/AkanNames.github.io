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

    const d = new Date(dob).getDay();

    if(dob === ""){
        alert("INVALID INPUT");
    }


    if (gender === "male"){
        console.log("Your Akan name is "+maleAkanNames[d]);
    }else{
        console.log("Your Akan name is "+femaleAkanNames[d]);
    }
  
}






document.querySelector("#frmAkans").addEventListener("submit", checkAkan);