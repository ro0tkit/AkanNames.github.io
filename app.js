
const checkAkan = (e) => {
    e.preventDefault();
    const maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    const femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

    const frm = document.querySelector("#akanForm");
    const fd = new FormData(frm);
    const gender = fd.get("gender");
    const dob = fd.get("dob");

    const d = new Date(dob).getDay();

    if(dob === ""){
        alert("INVALID INPUT!");
    }


    if (gender === "male"){
        document.querySelector("#message").innerHTML=("Your Akan name is "+maleAkanNames[d]);
    }else{
        document.querySelector("#message").innerHTML=("Your Akan name is "+femaleAkanNames[d]);
    }
  
}


document.querySelector("#akanForm").addEventListener("submit", checkAkan);