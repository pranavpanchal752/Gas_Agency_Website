const container = document.querySelector(".container"),
    pwShowHide = document.querySelectorAll(".showHidePw"),
    pwFields = document.querySelectorAll(".password"),
    signup = document.querySelector(".signup-link"),
    login = document.querySelector(".login-link");

    // js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type === "password")
                {
                    pwField.type = "text";

                    pwShowHide.forEach(icon=>{
                        icon.classList.replace("uil-eye-slash","uil-eye")
                    })
                }
                else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon=>{
                        icon.classList.replace("uil-eye","uil-eye-slash")
                    })
                }
            })
        })
    })

    // JS code to  prepare signup and login form
    signup.addEventListener("click",( )=>{
        container.classList.add("active")
    })
    login.addEventListener("click",( )=>{
        container.classList.remove("active")
    })

function validate()
{
    var un = document.getElementById("un").value;
    var pass = document.getElementById("pass").value;
    if (un == "admin@gmail.com" && pass == "admin") {
        document.location.href='claim.html';
    }
    else {
        document.getElementById("ferror").style="color:red";
        document.getElementById("ferror").innerHTML = "Email or password is wrong !!"
    }
}

