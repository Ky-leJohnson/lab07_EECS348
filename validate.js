function validate(){
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;

    if (password1.length < 8 || password2.length < 8)
    {
        alert("Passwords must be greater than 8 characters");

    }else if (password1 !== password2){
        alert("Passwords do not match");

    }else{
        alert("Passwords matched")
    }
}