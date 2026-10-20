const form = document.getElementById("form");

function checkName(){
    const name = document.getElementById("name").value.trim();
    const pattern = /^[A-Za-z][A-Za-z .'-]+$/;
    if (!pattern.test(name)){
        alert("Enter Valid Name");
        return false;
    }
    return true;
}

function checkPhNo(){
    const phone = document.getElementById("mobile-number").value.trim();
    const pattern = /^[0-9]{10}$/;
    if (!pattern.test(phone)){
        alert("Enter Valid Phone Number");
        return false;
    }
    return true;
}

function checkEmail(){
    const email = document.getElementById("email").value.trim();
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(email)){
        alert("Enter Valid Email");
        return false;
    }
    return true;
}

function checkUserName(){
    const username = document.getElementById("user-name").value.trim();
    if (!username){
        alert("User name cannot be empty");
        return false;
    }
    return true;
    
}

function checkPassword(){
    const password = document.getElementById("password").value;
    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;
    const digit = /[0-9]/;
    const specialChar = /[^A-Za-z0-9]/;

    if(password.length < 8){
        alert("Password must have atleast 8 characters");
        return false;
    }

    if(!uppercase.test(password)){
        alert("Password must contain upper case letter");
        return false;
    }

    if(!lowercase.test(password)){
        alert("Password must contain lower case letter");
        return false;
    }

    if(!digit.test(password)){
        alert("Password must contain atleast 1 digit");
        return false;
    }

    if(!specialChar.test(password)){
        alert("Password must contain atleast 1 special character");
        return false;
    }

    return true;
}

function mainFunction(event){
    if(!checkName() || !checkEmail() || !checkPhNo() || !checkUserName() || !checkPassword()){
        event.preventDefault();
    }else{
        alert("Form submitted successfully");
    }

}

form.addEventListener("submit",mainFunction);