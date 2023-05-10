var isallusers = JSON.parse(localStorage.getItem("isallusers"));
var allusers = JSON.parse(localStorage.getItem("allusers"));
for (var k = 0; k < isallusers.length; k++) {
    for (var i = 0; i < allusers.length; i++) {
        if (isallusers[k].logUserEmail == allusers[i].userEmail && isallusers[k].logUserPassword == allusers[i].userPassword) {
           
          document.querySelector(".content1").innerHTML=`Hello `+ allusers[i].userName;
        }
    }
}

    
        