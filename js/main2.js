var myname = document.querySelector(".name");
var email = document.querySelector(".email");
var password = document.querySelector(".password");
var allusers;
if (localStorage.getItem("allusers") == null) {
    allusers = [];
} else {
    allusers = JSON.parse(localStorage.getItem("allusers"));
}

document.querySelector(".btn").addEventListener("click", function () {

    if (myname.value == "" && email.value == "" && password.value == "") {
        document.querySelector(".message").innerHTML = "all inputs required";
    } else if (myname.value != "" && email.value == "" && password.value == "") {
        document.querySelector(".message").innerHTML = "all inputs required";
    } else if (myname.value == "" && email.value == "" && password.value != "") {
        document.querySelector(".message").innerHTML = "all inputs required";
    } else if (myname.value != "" && email.value != "" && password.value == "") {
        document.querySelector(".message").innerHTML = "all inputs required";
    } else if (myname.value != "" && email.value == "" && password.value != "") {
        document.querySelector(".message").innerHTML = "all inputs required";
    } else if (myname.value == "" && email.value != "" && password.value == "") {
        document.querySelector(".message").innerHTML = "all inputs required";
    } else if (myname.value == "" && email.value != "" && password.value != "") {
        document.querySelector(".message").innerHTML = "all inputs required";
    // } else if (email.value == email.value) {
    //     document.querySelector(".message").innerHTML = "this email is already exist";
    // } 
    }else {
        var user = {
            userName: myname.value,
            userEmail: email.value,
            userPassword: password.value
        }
        allusers.push(user);
        localStorage.setItem("allusers", JSON.stringify(allusers))
        document.querySelector(".message").innerHTML = "success";
        document.querySelector(".message").style.color = "green"
        clear();

        // localStorage.clear()
    }
}

)
function clear() {
    myname.value = "";
    email.value = "";
    password.value = "";
}
