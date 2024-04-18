let eyeOpen = document.querySelector(".eye-open");
let eyeClose = document.querySelector(".eye-close");
let inputPassword = document.getElementById("password"); 

let signUp = document.querySelector('sign-up')

function togglePassword() {
    eyeOpen.addEventListener("click", () => {
        if (inputPassword.type === "password") {
            inputPassword.type = "text";
            eyeOpen.style.display = "none";
            eyeClose.style.display = "inline-block";
        } else {
            inputPassword.type = "password";
            eyeClose.style.display = "none";
            eyeOpen.style.display = "inline-block";
        }
    });

    eyeClose.addEventListener("click", () => {
        if (inputPassword.type === "password") {
            inputPassword.type = "text";
            eyeOpen.style.display = "none";
            eyeClose.style.display = "inline-block";
        } else {
            inputPassword.type = "password";
            eyeClose.style.display = "none";
            eyeOpen.style.display = "inline-block";
        }
    });
}

togglePassword(); 


function hover() {
    signUp.addEventListener("mouseover", function () {
        document.body.style.color = #ec520a;
    });
    
}

