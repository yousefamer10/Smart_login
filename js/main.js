var isemail = document.querySelector(".email");
var ispassword = document.querySelector(".password");
var isallusers ;
if(localStorage.getItem(isallusers)==null){
    isallusers=[];
}else{
    isallusers =JSON.parse(localStorage.getItem("isallusers"));
}
allusers = JSON.parse(localStorage.getItem("allusers"));
document.querySelector(".btn").addEventListener("click", function () {

    if (isemail.value == "" && ispassword.value == "") {
        document.querySelector(".onetwo").innerHTML = "all inputs required";
    } else if (isemail.value != "" && ispassword.value == "") {
        document.querySelector(".message").innerHTML = "all inputs required";
    } else if (isemail.value == "" && ispassword.value != "") {
        document.querySelector(".message").innerHTML = "all inputs required";
    } else {
        var user = {
            logUserEmail: isemail.value,
            logUserPassword: ispassword.value
        }
        isallusers.push(user);
        clear();
        localStorage.setItem("isallusers", JSON.stringify(isallusers));
        isallusers = JSON.parse(localStorage.getItem("isallusers"));
        for (var k = 0; k < isallusers.length; k++) {
            for (var i = 0; i < allusers.length; i++) {
                if (isallusers[k].logUserEmail == allusers[i].userEmail && isallusers[k].logUserPassword == allusers[i].userPassword) {
                    location.href = `file:///D:/cycle39/assignment10/index3.html`;
                }
            }
        }
    }
}
)
function clear(){
    isemail.value="";
    ispassword.value="";
}
